import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import CryptoJS from 'crypto-js';

import Toast from '../components/toast';

function HashGenerator() {
  const [input, setInput] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [md5, setMd5] = useState('');
  const [sha1, setSha1] = useState('');
  const [sha256, setSha256] = useState('');
  const [sha512, setSha512] = useState('');
  const [ripemd160, setRipemd160] = useState('');

  useEffect(() => {
    if (input === '') {
      setMd5('');
      setSha1('');
      setSha256('');
      setSha512('');
      setRipemd160('');
    } else {
      setMd5(CryptoJS.MD5(input).toString());
      setSha1(CryptoJS.SHA1(input).toString());
      setSha256(CryptoJS.SHA256(input).toString());
      setSha512(CryptoJS.SHA512(input).toString());
      setRipemd160(CryptoJS.RIPEMD160(input).toString());
    }
  }, [input]);

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      setInput(text);
    });
  }

  function handleClearInput() {
    setInput('');
  }

  function handleAddToClipboard(string) {
    navigator.clipboard.writeText(string).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  return (
    <>
      <Head>
        <title>Hash Generator - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">Hash Generator</div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center">
            <strong className="text-sm dark:text-gray-300 mr-4">Input:</strong>
            <button
              type="button"
              onClick={handlePasteInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
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
          <div className="mt-4">
            <textarea
              name="input"
              cols="30"
              rows="10"
              className="transition w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-xs border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              style={{ height: 'calc(100vh - 12rem)' }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
        </div>
        <div className="mt-11 pt-0.5">
          <div className="mb-4">
            <strong className="text-sm dark:text-gray-300 mr-4">MD5:</strong>
            <div className="flex items-center">
              <input
                type="text"
                name="md5"
                value={md5}
                readOnly
                className="transition w-full px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleAddToClipboard(md5)}
                className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white text-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div className="mb-4">
            <strong className="text-sm dark:text-gray-300 mr-4">SHA1:</strong>
            <div className="flex items-center">
              <input
                type="text"
                name="sha1"
                value={sha1}
                readOnly
                className="transition w-full px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleAddToClipboard(sha1)}
                className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white text-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div className="mb-4">
            <strong className="text-sm dark:text-gray-300 mr-4">SHA256:</strong>
            <div className="flex items-center">
              <input
                type="text"
                name="sha256"
                value={sha256}
                readOnly
                className="transition w-full px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleAddToClipboard(sha256)}
                className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white text-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div className="mb-4">
            <strong className="text-sm dark:text-gray-300 mr-4">SHA512:</strong>
            <div className="flex items-center">
              <input
                type="text"
                name="sha512"
                value={sha512}
                readOnly
                className="transition w-full px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleAddToClipboard(sha512)}
                className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white text-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div>
            <strong className="text-sm dark:text-gray-300 mr-4">
              RIPEMD-160:
            </strong>
            <div className="flex items-center">
              <input
                type="text"
                name="ripemd160"
                value={ripemd160}
                readOnly
                className="transition w-full px-2 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleAddToClipboard(ripemd160)}
                className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white text-xs bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HashGenerator;
