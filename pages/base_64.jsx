/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Head from 'next/head';
import CryptoJS from 'crypto-js';

import Toast from '../components/toast';

function encode(input) {
  const encodedWord = CryptoJS.enc.Utf8.parse(input);
  const encoded = CryptoJS.enc.Base64.stringify(encodedWord);
  return encoded;
}

function decode(input) {
  const encodedWord = CryptoJS.enc.Base64.parse(input);
  const decoded = CryptoJS.enc.Utf8.stringify(encodedWord);
  return decoded;
}

function Base64() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [action, setAction] = useState('encode');
  const [isValidBase64, setIsValidBase64] = useState(true);
  const [showToast, setShowToast] = useState(false);

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      handleSetInput(text);
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

  function handleActionChange(newAction) {
    if (!isValidBase64) {
      setIsValidBase64(true);
    }

    let newOutput = '';

    setAction(newAction);

    if (newAction === 'encode') {
      newOutput = encode(input);
    } else {
      try {
        newOutput = decode(input);
      } catch (error) {
        setIsValidBase64(false);
      }
    }

    setOutput(newOutput);
  }

  function handleSetInput(value) {
    if (!isValidBase64) {
      setIsValidBase64(true);
    }

    let newOutput = '';

    setInput(value);

    if (action === 'encode') {
      newOutput = encode(value);
    } else {
      try {
        newOutput = decode(value);
      } catch (error) {
        setIsValidBase64(false);
      }
    }

    setOutput(newOutput);
  }

  function handleClearInput() {
    handleSetInput('');
  }

  return (
    <>
      <Head>
        <title>Base64 Encode/Decode - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">Base64 Encode/Decode</div>
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
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <input
              id="encode-radio"
              name="encode-radio"
              type="radio"
              checked={action === 'encode'}
              onChange={() => handleActionChange('encode')}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="encode-radio"
              className="transition ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Encode
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="decode-radio"
              name="decode-radio"
              type="radio"
              checked={action === 'decode'}
              onChange={() => handleActionChange('decode')}
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
            />
            <label
              htmlFor="decode-radio"
              className="transition ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Decode
            </label>
          </div>
        </div>
      </div>
      <textarea
        name="input"
        cols="30"
        rows="10"
        className="transition w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border border-gray-300 resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
        value={input}
        onChange={(event) => handleSetInput(event.target.value)}
      />
      {!isValidBase64 && (
        <span className="text-red-600">The input is not valid Base64</span>
      )}
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
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => handleSetInput(output)}
            >
              Use as input
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

export default Base64;
