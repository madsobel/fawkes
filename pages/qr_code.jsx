import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import QRCode from 'qrcode.react';

import ToggleSwitch from '../components/toggle_switch';

import { lengthInUtf8Bytes } from '../utils/utils';

const MAX_QR_CODE_LENGTH_IN_BYTES = 2954;

function QrCode() {
  const [input, setInput] = useState('');
  const [downloadSource, setDownloadSource] = useState('');
  const [includeMargin, setIncludeMargin] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [foregroundColor, setForegroundColor] = useState('#ffffff');
  const [qrLengthError, setQrLengthError] = useState(false);

  useEffect(() => {
    const canvasDataUrl = document
      .querySelector('#qr_code_wrapper > canvas')
      .toDataURL();
    setDownloadSource(canvasDataUrl);
  }, [input]);

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      handleSetInput(text);
    });
  }

  function handleSetInput(inputValue) {
    setQrLengthError(false);

    if (lengthInUtf8Bytes(inputValue) >= MAX_QR_CODE_LENGTH_IN_BYTES) {
      setQrLengthError(true);
      return;
    }

    setInput(inputValue);
  }

  return (
    <>
      <Head>
        <title>QR Code Generator - Fawkes</title>
      </Head>
      <div className="text-center mb-4">QR Code Generator</div>
      <div className="gap-4">
        <div>
          <div className="flex items-center">
            <strong className="text-sm dark:text-gray-300 mr-4">Input:</strong>
            <button
              type="button"
              onClick={handlePasteInput}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
            >
              Paste from Clipboard
            </button>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <div className="w-full">
            <textarea
              name="input"
              cols="30"
              rows="10"
              className="transition w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-xs border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              style={{ height: 'calc(100vh - 12rem)' }}
              value={input}
              onChange={(event) => handleSetInput(event.target.value)}
            />
            {qrLengthError && (
              <span className="text-red-600">
                The input is too long. QR could not be generated.
              </span>
            )}
          </div>
          <div className="w-96">
            <div className="flex items-center">
              <strong className="text-sm dark:text-gray-300 mr-4">
                Include margin:
              </strong>
              <ToggleSwitch
                checked={includeMargin}
                onChange={setIncludeMargin}
              />
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col flex-1">
                <strong className="text-sm dark:text-gray-300 mr-4 mb-2">
                  Background:
                </strong>
                <input
                  type="color"
                  defaultValue={backgroundColor}
                  onChange={(event) => setBackgroundColor(event.target.value)}
                  className="dark:bg-gray-800 border dark:border-gray-600 h-10 p-1 rounded-md w-16"
                />
              </div>
              <div className="flex flex-col flex-1">
                <strong className="text-sm dark:text-gray-300 mr-4 mb-2">
                  Foreground:
                </strong>
                <input
                  type="color"
                  defaultValue={foregroundColor}
                  onChange={(event) => setForegroundColor(event.target.value)}
                  className="dark:bg-gray-800 border dark:border-gray-600 h-10 p-1 rounded-md w-16"
                />
              </div>
            </div>
            <div className="mt-4" id="qr_code_wrapper">
              <QRCode
                value={input}
                size={256}
                includeMargin={includeMargin}
                bgColor={backgroundColor}
                fgColor={foregroundColor}
              />
            </div>
            <div className="mt-4">
              <a
                href={downloadSource}
                download="my_qr_code.png"
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
              >
                Save as
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QrCode;
