import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { loremIpsum } from 'lorem-ipsum';

import Toast from '../components/toast';
import Select from '../components/select';

function LoremIpsum() {
  const [output, setOutput] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [count, setCount] = useState(5);
  const [units, setUnits] = useState('paragraphs');
  const [format, setFormat] = useState('plain');

  function handleCopyInput() {
    navigator.clipboard.writeText(output).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  function handleSetOutput() {
    const generatedLorem = loremIpsum({
      count,
      units,
      format,
      suffix: '\n\n',
    });
    setOutput(generatedLorem);
  }

  useEffect(() => {
    handleSetOutput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Lorem Ipsum Generator - Fawkes</title>
      </Head>
      {showToast && <Toast message="Output added to clipboard" />}
      <div className="text-center mb-4">Lorem Ipsum Generator</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <div className="flex flex-col max-w-sm">
            <strong className="transition text-sm dark:text-gray-300 mb-1">
              Count: ({count})
            </strong>
            <input
              type="range"
              name="count"
              className="appearance-none bg-blue-600 overflow-hidden rounded-lg"
              min={1}
              max={128}
              value={count}
              onChange={(event) => setCount(parseInt(event.target.value, 10))}
            />
            <div className="flex justify-between text-xs font-mono mt-1 px-1">
              <span>1</span>
              <span>128</span>
            </div>
          </div>
          <strong className="text-sm dark:text-gray-300 block mt-4">
            Units:
          </strong>
          <Select
            items={[
              { value: 'paragraphs', name: 'Paragraphs' },
              { value: 'sentences', name: 'Sentences' },
              { value: 'words', name: 'Words' },
            ]}
            onChange={(e) => setUnits(e.target.value)}
          />
          <strong className="text-sm dark:text-gray-300 block mt-4">
            Format:
          </strong>
          <Select
            items={[
              { value: 'plain', name: 'Plain text' },
              { value: 'html', name: 'HTML' },
            ]}
            onChange={(e) => setFormat(e.target.value)}
          />
          <div className="flex items-center mt-4">
            <button
              type="button"
              onClick={handleSetOutput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
            >
              Generate
            </button>
            <button
              type="button"
              onClick={handleCopyInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
        <textarea
          className="transition w-full p-2 rounded-md font-mono text-sm border border-gray-300 resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
          style={{ height: 'calc(100vh - 12rem)' }}
          value={output}
          disabled
        />
      </div>
    </>
  );
}

export default LoremIpsum;
