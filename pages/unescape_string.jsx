import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Toast from '../components/toast';

function UnescapeString() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showToast, setShowToast] = useState(false);

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      setInput(text);
    });
  }

  function handleCopyInput() {
    navigator.clipboard.writeText(output).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  function handleClearInput() {
    setInput('');
  }

  useEffect(() => {
    const newOutput = input.replace(/\\/g,'');
    setOutput(newOutput);
  }, [input]);

  return (
    <>
      <Head>
        <title>Unescape String - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">Unescape String</div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
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
      </div>
      <textarea
        name="input"
        cols="30"
        rows="10"
        className="transition w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border border-gray-300 resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <hr className="transition mt-5 mb-2 border-gray-200 dark:border-gray-600" />
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <strong className="text-sm mb-1 dark:text-gray-300 mr-4">
            Output:
          </strong>
          <div className="flex-items-center">
            <button
              type="button"
              onClick={handleCopyInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
        <textarea
          className="transition w-full p-2 rounded-md h-56 font-mono text-sm border border-gray-300 resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
          value={output}
          disabled
        />
      </div>
    </>
  );
}

export default UnescapeString;
