import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import generator from 'generate-password-browser';

import Toast from '../components/toast';
import ToggleSwitch from '../components/toggle_switch';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [passwordUseNumbers, setPasswordUseNumbers] = useState(true);
  const [passwordUseSymbols, setPasswordUseSymbols] = useState(true);
  const [showToast, setShowToast] = useState(false);

  function generatePassword() {
    const newPassword = generator.generate({
      length: passwordLength,
      numbers: passwordUseNumbers,
      symbols: passwordUseSymbols,
    });

    setPassword(newPassword);
  }

  function handleCopyInput() {
    navigator.clipboard.writeText(password).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  }

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordLength, passwordUseNumbers, passwordUseSymbols]);

  return (
    <>
      <Head>
        <title>Password Generator - Fawkes</title>
      </Head>
      {showToast && <Toast message="Password added to clipboard" />}
      <div className="text-center mb-4">Password Generator</div>
      <div className="flex flex-col max-w-sm">
        <strong className="transition text-sm dark:text-gray-300 mb-1">
          Length: ({passwordLength})
        </strong>
        <input
          type="range"
          name="passwordLength"
          className="appearance-none bg-blue-600 overflow-hidden rounded-lg"
          min={6}
          max={256}
          value={passwordLength}
          onChange={(event) => setPasswordLength(event.target.value)}
        />
        <div className="flex justify-between text-xs font-mono mt-1 px-1">
          <span>6</span>
          <span>256</span>
        </div>
      </div>
      <div className="flex flex-col max-w-sm mt-4">
        <strong className="transition text-sm dark:text-gray-300 mb-1">
          Use numbers
        </strong>
        <ToggleSwitch
          checked={passwordUseNumbers}
          onChange={setPasswordUseNumbers}
        />
      </div>
      <div className="flex flex-col max-w-sm mt-4">
        <strong className="transition text-sm dark:text-gray-300 mb-1">
          Use special characters
        </strong>
        <ToggleSwitch
          checked={passwordUseSymbols}
          onChange={setPasswordUseSymbols}
        />
      </div>
      <div className="mt-6">
        <button
          type="button"
          onClick={generatePassword}
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Re-generate password
        </button>
      </div>
      <div className="max-w-xl mt-4">
        <strong className="transition text-sm dark:text-gray-300 mr-1">
          Password:
        </strong>
        <input
          type="text"
          name="password"
          value={password}
          readOnly
          className="transition w-full px-2 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
        />
        <div className="text-right mt-2">
          <button
            type="button"
            onClick={handleCopyInput}
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
