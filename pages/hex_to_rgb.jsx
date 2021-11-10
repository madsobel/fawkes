import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import hexRgb from 'hex-rgb';

import Toast from '../components/toast';

function HexToRgb() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [cssOutput, setCssOutput] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    try {
      const rgb = hexRgb(input);
      const cssRgb = hexRgb(input, { format: 'css' });
      setOutput(rgb);
      setCssOutput(cssRgb);
    } catch (error) {
      // ...
    }
  }, [input]);

  function handleCopyInput() {
    navigator.clipboard.writeText(cssOutput).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  return (
    <>
      <Head>
        <title>Hex to RGB - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">Hex to RGB</div>
      <div className="flex items-center max-w-xs mx-auto">
        <input
          type="text"
          name="hex"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="transition w-full px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
          placeholder="4183c4 or #4183c4"
        />
      </div>
      {cssOutput.length > 0 && (
        <>
          <div className="text-center max-w-xs mx-auto mt-6">
            <h3 className="font-bold text-2xl mb-4">{cssOutput}</h3>
            <button
              type="button"
              onClick={handleCopyInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to Clipboard
            </button>

            <div
              className="h-32 w-32 mt-6 mx-auto rounded-md shadow-xl"
              style={{ backgroundColor: cssOutput }}
            />
            <dl className="transition divide-y divide-gray-200 dark:divide-gray-700 mt-6">
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  {output.red}
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Red
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  {output.green}
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Green
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  {output.blue}
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Blue
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  {output.alpha}
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Alpha
                </dd>
              </div>
            </dl>
          </div>
        </>
      )}
    </>
  );
}

export default HexToRgb;
