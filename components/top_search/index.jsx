import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useHotkeys } from 'react-hotkeys-hook';
import { BiCommand } from 'react-icons/bi';
import { HiX } from 'react-icons/hi';

const ALL_PAGES = [
  { id: 'p1', name: 'Base64 Encode/Decode', path: '/base_64' },
  { id: 'p2', name: 'Crontab Helper', path: '/crontab_helper' },
  { id: 'p3', name: 'DNS Lookup', path: '/dns_lookup' },
  { id: 'p4', name: 'Hash Generator', path: '/hash_generator' },
  { id: 'p5', name: 'Hex to RGB', path: '/hex_to_rgb' },
  { id: 'p6', name: 'JSON Formatter', path: '/json_format' },
  { id: 'p7', name: 'JSON to YAML', path: '/json_to_yaml' },
  { id: 'p8', name: 'Lorem Ipsum Generator', path: '/lorem_ipsum' },
  { id: 'p9', name: 'Markdown Preview', path: '/markdown_preview' },
  { id: 'p10', name: 'Password Generator', path: '/password_generator' },
  { id: 'p11', name: 'QR Code Generator', path: '/qr_code' },
  { id: 'p12', name: 'RGB to Hex', path: '/rgb_to_hex' },
  { id: 'p13', name: 'SQL Formatter', path: '/sql_formatter' },
  { id: 'p14', name: 'URL Encode/Decode', path: '/url_encode_decode' },
  { id: 'p15', name: 'YAML to JSON', path: '/yaml_to_json' },
];

function TopSearch() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [pages, setPages] = useState(ALL_PAGES);
  const [keyboardNavigationIndex, setKeyboardNavigationIndex] = useState(-1);
  const searchInputRef = useRef(null);
  const pagesRefs = useRef([]);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const router = useRouter()
  useHotkeys('cmd+k', () => searchInputRef.current.focus());

  useEffect(() => {
    pagesRefs.current = pagesRefs.current.slice(0, pages.length);
  }, [pages]);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          searchActive
        ) {
          resetSearch();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, searchActive]);
  }

  function handleClearSearchInput() {
    setSearchInput('');
    searchInputRef.current.focus();
  }

  function handleSearchChange(event) {
    const query = event.target.value;
    setSearchInput(query);

    const filteredPages = ALL_PAGES.filter((page) =>
      page.name.toLowerCase().includes(query.toLowerCase())
    );

    setPages(filteredPages);
  }

  function clearPageRefsBackgroundHighlight() {
    pagesRefs.current.forEach((p) => {
      p.classList.remove('bg-gray-100');
      p.classList.remove('dark:bg-gray-700');
      p.classList.add('dark:bg-gray-800');
    });
  }

  function handleNavigate(path) {
    router.push(path)
    searchInputRef.current.blur();
    resetSearch();
  }

  function resetSearch() {
    clearPageRefsBackgroundHighlight();
    setSearchInput('');
    setSearchActive(false);
    setKeyboardNavigationIndex(-1);
    setPages(ALL_PAGES);
  }

  function handleKeyDown(event) {
    if (event.code === 'Enter') {
      handleNavigate(pages[keyboardNavigationIndex].path);
    }

    if (
      event.code === 'ArrowDown' &&
      keyboardNavigationIndex + 1 < pages.length
    ) {
      clearPageRefsBackgroundHighlight();
      const newKeyboardNavigationIndex = keyboardNavigationIndex + 1;
      setKeyboardNavigationIndex(newKeyboardNavigationIndex);
      pagesRefs.current[newKeyboardNavigationIndex].classList.add(
        'bg-gray-100'
      );
      pagesRefs.current[newKeyboardNavigationIndex].classList.remove(
        'dark:bg-gray-800'
      );
      pagesRefs.current[newKeyboardNavigationIndex].classList.add(
        'dark:bg-gray-700'
      );
      pagesRefs.current[newKeyboardNavigationIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }

    if (event.code === 'ArrowUp' && keyboardNavigationIndex > 0) {
      clearPageRefsBackgroundHighlight();
      const newKeyboardNavigationIndex = keyboardNavigationIndex - 1;
      setKeyboardNavigationIndex(newKeyboardNavigationIndex);
      pagesRefs.current[newKeyboardNavigationIndex].classList.add(
        'bg-gray-100'
      );
      pagesRefs.current[newKeyboardNavigationIndex].classList.remove(
        'dark:bg-gray-800'
      );
      pagesRefs.current[newKeyboardNavigationIndex].classList.add(
        'dark:bg-gray-700'
      );
      pagesRefs.current[newKeyboardNavigationIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }

  return (
    <div className="w-96 relative flex items-center" ref={wrapperRef}>
      <input
        type="text"
        ref={searchInputRef}
        value={searchInput}
        onFocus={() => setSearchActive(true)}
        onKeyDown={handleKeyDown}
        onChange={handleSearchChange}
        className="transition border border-gray-400 bg-gray-300 pl-2 pr-12 py-1 rounded-md dark:bg-gray-600 dark:border-gray-500 w-full focus:outline-none focus:ring focus:border-blue-300"
      />
      {!searchActive && searchInput.length === 0 && (
        <span className="inline-flex items-center absolute right-3 text-gray-700 dark:text-gray-400">
          <BiCommand className="mr-1" />K
        </span>
      )}
      {searchInput.length > 0 && (
        <button
          type="button"
          onClick={handleClearSearchInput}
          className="inline-flex items-center absolute right-3 text-gray-700 dark:text-gray-400 text-lg p-1"
        >
          <HiX />
        </button>
      )}
      {searchActive && (
        <div className="transition absolute top-10 z-50 w-full rounded-md max-h-48 overflow-auto bg-white dark:bg-gray-800 shadow-2xl border dark:border-gray-600">
          <ul>
            {pages.map((page, index) => (
              <li
                key={page.id}
                ref={(element) => (pagesRefs.current[index] = element)}
                onClick={() => handleNavigate(page.path)}
                className="transition flex w-full items-center px-2 py-1 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700 text-sm font-mono bg-white dark:bg-gray-800 cursor-pointer"
              >
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopSearch;
