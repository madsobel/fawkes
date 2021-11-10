import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@headlessui/react';

import { classNames } from '../../utils/classnames';

function ToggleSwitch({ checked, onChange }) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-white dark:bg-gray-800 w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700',
          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          checked ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform transition-transform ease-in-out duration-200'
        )}
      />
    </Switch>
  );
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
