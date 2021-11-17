import React, { useState } from 'react';
import Head from 'next/head';
import isValidDomain from 'is-valid-domain';
import { BsSearch } from 'react-icons/bs';

import Table from '../components/table';

function DnsLookup() {
  const [domain, setDomain] = useState('');
  const [isDomainValid, setIsDomainValid] = useState(true);
  const [didSubmitDomain, setDidSubmitDomain] = useState(false);
  const [aRecords, setARecords] = useState([]);
  const [aaaaRecords, setAAAARecords] = useState([]);
  const [nsRecords, setNSRecords] = useState([]);
  const [mxRecords, setMXRecords] = useState([]);
  const [txtRecords, setTXTRecords] = useState([]);

  function handlePasteInput() {
    navigator.clipboard.readText().then((text) => {
      setDomain(text);
    });
  }

  function handleClearInput() {
    setDomain('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const domainValid = isValidDomain(domain, {
      wildcard: false,
      allowUnicode: true,
    });

    setIsDomainValid(domainValid);

    if (domainValid) {
      fetch(`/api/dns_lookup?domain=${domain}`)
        .then((response) => response.json())
        .then((records) => {
          setDidSubmitDomain(true);

          setNSRecords(
            records
              .filter((record) => record.type === 'NS')
              .map((record) => [record.type, record.value])
          );

          setARecords(
            records
              .filter((record) => record.type === 'A')
              .map((record) => [
                record.type,
                domain,
                record.address,
                record.ttl,
              ])
          );

          setAAAARecords(
            records
              .filter((record) => record.type === 'AAAA')
              .map((record) => [
                record.type,
                domain,
                record.address,
                record.ttl,
              ])
          );

          setMXRecords(
            records
              .filter((record) => record.type === 'MX')
              .sort((a, b) => a.priority - b.priority)
              .map((record) => [
                record.type,
                record.priority,
                domain,
                record.exchange,
              ])
          );

          setTXTRecords(
            records
              .filter((record) => record.type === 'TXT')
              .map((record) => [record.type, domain, record.entries.join(' ')])
          );
        });
    }
  }

  return (
    <>
      <Head>
        <title>DNS Lookup - Fawkes</title>
      </Head>
      <div className="text-center mb-4">DNS Lookup</div>
      <div className="flex items-center mb-2">
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
      <div className="max-w-lg mt-4">
        <form action="POST" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input
              type="text"
              name="domain"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              className="transition w-full px-2 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 font-mono text-sm border resize-none bg-white dark:bg-gray-600 dark:border-gray-500"
              placeholder="Enter domain (Eg. google.com)"
            />
            <button
              type="submit"
              className="inline-flex items-center flex-shrink-0 px-4 py-2.5 border border-blue-600 hover:border-blue-700 rounded-r-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <BsSearch className="mr-2" />
              Look up
            </button>
          </div>
          {!isDomainValid && (
            <span className="text-red-600">
              The input is not a valid domain
            </span>
          )}
        </form>
      </div>
      {didSubmitDomain && (
        <div className="mt-6">
          {nsRecords.length > 0 && (
            <div className="mb-6">
              <h2 className="transition font-bold mb-1 text-gray-700 dark:text-gray-300 text-lg">
                Nameservers
              </h2>
              <Table headings={['Type', 'Domain Name']} entries={nsRecords} />
            </div>
          )}
          {aRecords.length > 0 && (
            <div className="mb-6">
              <h2 className="transition font-bold mb-1 text-gray-700 dark:text-gray-300 text-lg">
                A Records
              </h2>
              <Table
                headings={['Type', 'Domain Name', 'IP Address', 'TTL']}
                entries={aRecords}
              />
            </div>
          )}
          {aaaaRecords.length > 0 && (
            <div className="mb-6">
              <h2 className="transition font-bold mb-1 text-gray-700 dark:text-gray-300 text-lg">
                AAAA Records
              </h2>
              <Table
                headings={['Type', 'Domain Name', 'IPv6 Address', 'TTL']}
                entries={aaaaRecords}
              />
            </div>
          )}
          {mxRecords.length > 0 && (
            <div className="mb-6">
              <h2 className="transition font-bold mb-1 text-gray-700 dark:text-gray-300 text-lg">
                MX Records
              </h2>
              <Table
                headings={['Type', 'Priority', 'Domain Name', 'Hostname']}
                entries={mxRecords}
              />
            </div>
          )}
          {txtRecords.length > 0 && (
            <div className="mb-6">
              <h2 className="transition font-bold mb-1 text-gray-700 dark:text-gray-300 text-lg">
                TXT Records
              </h2>
              <Table
                headings={['Type', 'Domain Name', 'Value']}
                entries={txtRecords}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DnsLookup;
