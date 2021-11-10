import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';

import Toast from '../components/toast';

function JsonFormat() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [output]);

  function handleFormat() {
    if (input.length === 0) return;
    setIsInputValid(true);

    try {
      const parsedInput = JSON.parse(input);
      const stringifiedOutput = JSON.stringify(parsedInput, null, 2);
      setOutput(stringifiedOutput);
    } catch (error) {
      setIsInputValid(false);
    }
  }

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      setInput(text);
    });
  }

  function handleClearInput() {
    setInput('');
  }

  function handleCopyInput() {
    navigator.clipboard.writeText(output).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  return (
    <>
      <Head>
        <title>JSON Formatter - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">JSON Formatter</div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center">
            <strong className="text-sm dark:text-gray-300 mr-4">Input:</strong>
            <button
              type="button"
              onClick={handleFormat}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
            >
              Format
            </button>
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
              className="transition w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              style={{ height: 'calc(100vh - 12rem)' }}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            {!isInputValid && (
              <span className="text-red-600">The input is not valid JSON</span>
            )}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <strong className="text-sm dark:text-gray-300 mr-4">Output:</strong>
            <button
              type="button"
              onClick={handleCopyInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to Clipboard
            </button>
          </div>
          <div className="mt-4">
            <pre
              className="transition w-full p-2 overflow-auto rounded-md font-mono text-xs whitespace-pre border resize-none border border-gray-300 bg-white dark:bg-gray-600 dark:border-gray-500"
              style={{ height: 'calc(100vh - 12rem)' }}
            >
              <code className="language-json text-xs-important">{output}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default JsonFormat;
