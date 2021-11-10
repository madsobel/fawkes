import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import cronstrue from 'cronstrue';

function CrontabHelper() {
  const [input, setInput] = useState('* * * * *');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      setHasError(false);
      const parsedCronOutput = cronstrue.toString(input);
      setOutput(parsedCronOutput);
    } catch (e) {
      setHasError(true);
      setError(e);
    }
  }, [input]);

  function handlePasteInput() {
    navigator.clipboard.readText().then(text => {
      setInput(text);
    });
  }

  return (
    <>
      <Head>
        <title>Crontab Helper - Fawkes</title>
      </Head>
      <div className="text-center mb-4">Crontab Helper</div>
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
          </div>
          <div className="max-w-sm mx-auto mt-4">
            <input
              type="text"
              name="input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="transition w-full tracking-widest px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-center border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              placeholder="* * * * *"
            />
          </div>
          <div className="transition text-center text-2xl font-bold mt-4 font-mono">
            {output}
          </div>
          {hasError && (
            <p className="font-mono text-red-600 text-sm mt-4">{error}</p>
          )}
        </div>
        <div>
          <div className="max-w-sm mx-auto font-mono mt-6">
            <h3 className="text-center text-lg font-bold">Syntax</h3>
            <dl className="transition divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  *
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Any value
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  ,
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Value list separator
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  -
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Range of values
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  0-59
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Second
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  0-59
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Minute
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  0-23
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Hour
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  1-31
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Day of month
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  1-12
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Month
                </dd>
              </div>
              <div className="flex justify-between px-4 py-2">
                <dt className="transition font-bold text-lg text-gray-900 dark:text-gray-200">
                  0-6
                </dt>
                <dd className="transition mt-1 text-sm text-gray-700 dark:text-gray-400">
                  Day of week
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrontabHelper;
