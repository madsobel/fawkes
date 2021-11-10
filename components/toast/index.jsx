import React from 'react';
import PropTypes from 'prop-types';

function Toast({ message }) {
  return (
    <div className="transition absolute bg-green-500 px-3 py-2 right-4 rounded-md shadow-lg text-white z-10">
      {message}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Toast;
