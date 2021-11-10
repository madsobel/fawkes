/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

function Select({ items, onChange }) {
  return (
    <select
      id="location"
      name="location"
      className="transition  block w-full pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md dark:bg-gray-600 dark:border-gray-500"
      onChange={onChange}
    >
      {items.map((item, index) => (
        <option value={item.value} key={`${item.value}-${index}`}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
