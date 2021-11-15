import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { VscJson } from 'react-icons/vsc';
import { FaAsterisk } from 'react-icons/fa';
import { MdDns, MdPassword } from 'react-icons/md';
import { HiOutlineQrcode, HiHashtag } from 'react-icons/hi';
import { SiConvertio } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BiParagraph } from 'react-icons/bi';
import { IoIosColorPalette } from 'react-icons/io';
import { BsMarkdownFill, BsSlashSquare } from 'react-icons/bs';

function SidebarNav() {
  const router = useRouter();

  return (
    <ul className="h-full">
      <li>
        <Link
          href="/base_64"
          passHref
        >
          <a className={router.pathname === '/base_64' ? 'nav-link--active' : 'nav-link'}>
            <span className="ml-1 mr-1 pr-1 pl-0.5 py-0.5 text-sm">64</span>
            Base64 Encode/Decode
          </a>
        </Link>
        <Link
          href="/crontab_helper"
          passHref
        >
          <a className={router.pathname === '/crontab_helper' ? 'nav-link--active' : 'nav-link'}>
            <FaAsterisk size="2em" className="p-1 mr-1 text-xs" />
            Crontab Helper
          </a>
        </Link>
        <Link
          href="/dns_lookup"
          passHref
        >
          <a className={router.pathname === '/dns_lookup' ? 'nav-link--active' : 'nav-link'}>
            <MdDns size="2em" className="p-1 mr-1 text-xs" />
            DNS Lookup
          </a>
        </Link>
        <Link
          href="/hash_generator"
          passHref
        >
          <a className={router.pathname === '/hash_generator' ? 'nav-link--active' : 'nav-link'}>
            <HiHashtag size="2em" className="p-1 mr-1 text-xs" />
            Hash Generator
          </a>
        </Link>
        <Link
          href="/hex_to_rgb"
          passHref
        >
          <a className={router.pathname === '/hex_to_rgb' ? 'nav-link--active' : 'nav-link'}>
            <IoIosColorPalette size="2em" className="p-1 mr-1 text-xs" />
            Hex to RGB
          </a>
        </Link>
        <Link
          href="/json_format"
          passHref
        >
          <a className={router.pathname === '/json_format' ? 'nav-link--active' : 'nav-link'}>
            <VscJson size="2em" className="p-1 mr-1 text-xs" />
            JSON Formatter
          </a>
        </Link>
        <Link
          href="/json_to_yaml"
          passHref
        >
          <a className={router.pathname === '/json_to_yaml' ? 'nav-link--active' : 'nav-link'}>
            <SiConvertio size="2em" className="p-1 mr-1 text-xs" />
            JSON to YAML
          </a>
        </Link>
        <Link
          href="/lorem_ipsum"
          passHref
        >
          <a className={router.pathname === '/lorem_ipsum' ? 'nav-link--active' : 'nav-link'}>
            <BiParagraph size="2em" className="p-1 mr-1 text-xs" />
            Lorem Ipsum Generator
          </a>
        </Link>
        <Link
          href="/markdown_preview"
          passHref
        >
          <a className={router.pathname === '/markdown_preview' ? 'nav-link--active' : 'nav-link'}>
            <BsMarkdownFill size="2em" className="p-1 mr-1 text-xs" />
            Markdown Preview
          </a>
        </Link>
        <Link
          href="/password_generator"
          passHref
        >
          <a className={router.pathname === '/password_generator' ? 'nav-link--active' : 'nav-link'}>
            <MdPassword size="2em" className="p-1 mr-1 text-xs" />
            Password Generator
          </a>
        </Link>
        <Link
          href="/qr_code"
          passHref
        >
          <a className={router.pathname === '/qr_code' ? 'nav-link--active' : 'nav-link'}>
            <HiOutlineQrcode size="2em" className="p-1 mr-1 text-xs" />
            QR Code Generator
          </a>
        </Link>
        <Link
          href="/rgb_to_hex"
          passHref
        >
          <a className={router.pathname === '/rgb_to_hex' ? 'nav-link--active' : 'nav-link'}>
            <IoIosColorPalette size="2em" className="p-1 mr-1 text-xs" />
            RGB to Hex
          </a>
        </Link>
        <Link
          href="/sql_formatter"
          passHref
        >
          <a className={router.pathname === '/sql_formatter' ? 'nav-link--active' : 'nav-link'}>
            <AiOutlineConsoleSql size="2em" className="p-1 mr-1 text-xs" />
            SQL Formatter
          </a>
        </Link>
        <Link
          href="/unescape_string"
          passHref
        >
          <a className={router.pathname === '/unescape_string' ? 'nav-link--active' : 'nav-link'}>
            <span className="transform rotate-90 mr-1">
              <BsSlashSquare size="2em" className="p-1 text-xs" />
            </span>
            Unescape String
          </a>
        </Link>
        <Link
          href="/url_encode_decode"
          passHref
        >
          <a className={router.pathname === '/url_encode_decode' ? 'nav-link--active' : 'nav-link'}>
            <span className="ml-1 mr-2 px-1 py-0.5 text-sm">&</span>
            URL Encode/Decode
          </a>
        </Link>
        <Link
          href="/yaml_to_json"
          passHref
        >
          <a className={router.pathname === '/yaml_to_json' ? 'nav-link--active' : 'nav-link'}>
            <SiConvertio size="2em" className="p-1 mr-1 text-xs" />
            YAML to JSON
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default SidebarNav;
