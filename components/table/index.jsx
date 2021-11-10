/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

function Table({ headings, entries }) {
  return (
    <div className="flex flex-col font-mono">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="transition shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg">
            <table className="transition min-w-full divide-y divide-gray-200 dark:divide-gray-800">
              <thead className="transition bg-gray-50 dark:bg-gray-700">
                <tr>
                  {headings.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="transition px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="transition bg-white dark:bg-gray-600 divide-y divide-gray-200 dark:divide-gray-800">
                {entries.map((entry, index) => (
                  <tr key={`row_${index}`}>
                    {entry.map((value, idx) => (
                      <td
                        key={`cell_${idx}`}
                        className="transition px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  entries: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Table;
