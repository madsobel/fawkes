import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import rgbHex from 'rgb-hex';

import Toast from '../components/toast';

function RgbToHex() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    try {
      setOutput(`#${rgbHex(input)}`);
    } catch (error) {
      // ...
    }
  }, [input]);

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
        <title>RGB to Hex - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">RGB to Hex</div>
      <div className="flex items-center max-w-xs mx-auto">
        <input
          type="text"
          name="rgb"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="transition w-full px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
          placeholder="65, 131, 196 or rgb(40, 42, 54)"
        />
      </div>
      {output.length > 0 && (
        <>
          <div className="text-center max-w-xs mx-auto mt-6">
            <h3 className="font-bold text-2xl mb-4">{output}</h3>
            <button
              type="button"
              onClick={handleCopyInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to Clipboard
            </button>

            <div
              className="h-32 w-32 mt-6 mx-auto rounded-md shadow-xl"
              style={{ backgroundColor: output }}
            />
          </div>
        </>
      )}
    </>
  );
}

export default RgbToHex;
