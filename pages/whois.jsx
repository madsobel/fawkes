import React, { useState } from 'react';
import Head from 'next/head';
import isValidDomain from 'is-valid-domain';
import { BsSearch } from 'react-icons/bs';

function Whois() {
  const [domain, setDomain] = useState('');
  const [isDomainValid, setIsDomainValid] = useState(true);
  const [whois, setWhois] = useState({});

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      setDomain(text);
    });
  }

  function handleClearInput() {
    setDomain('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const domainValid = isValidDomain(domain, {
      wildcard: false,
      allowUnicode: true,
    });

    setIsDomainValid(domainValid);

    if (domainValid) {
      fetch(`/api/whois?domain=${domain}`)
        .then((response) => response.json())
        .then((whoisData) => {
          const firstKey = Object.keys(whoisData);
          setWhois(whoisData[firstKey]);
        });
    }
  }

  return (
    <>
      <Head>
        <title>Whois - Fawkes</title>
      </Head>
      <div className="text-center mb-4">Whois</div>
      <div className="max-w-4xl mx-auto mt-4">
        <div className="flex items-center mb-2">
          <strong className="text-sm dark:text-gray-300 mr-4">Input:</strong>
          <button
            type="button"
            onClick={handlePasteInput}
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
          >
            Paste from Clipboard
          </button>
          <button
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleClearInput}
          >
            Clear
          </button>
        </div>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              name="domain"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              className="transition w-full px-2 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              placeholder="Enter domain (Eg. google.com)"
            />
            <button
              type="submit"
              className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BsSearch className="mr-2" />
              Look up
            </button>
          </div>
          {!isDomainValid && (
            <span className="text-red-600">
              The input is not a valid domain
            </span>
          )}
        </form>
        <div className="mt-6">
          <textarea
            className="transition w-full p-2 rounded-md h-96 font-mono text-sm border border-gray-300 resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
            value={whois['__raw']}
            disabled
          />
        </div>
      </div>
    </>
  );
}

export default Whois;
