import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservedRocket } from '../redux/rockets/rocketsSlice';

const RocketComponent = ({ type, status, id }) => {
  const dispatch = useDispatch();

  if (type === 'button') {
    return (
      <button
        type="button"
        onClick={() => {
          dispatch(reservedRocket(id));
        }}
        className={`border-none w-40 h-10 rounded-md text-white text-sm tracking-wider transition-all ${status
          ? 'bg-slate-600 hover:shadow-md' : 'bg-blue-600 hover:shadow-md'}`}
      >
        {status ? 'Cancel Reservation' : 'Reserve Rocket'}
      </button>
    );
  }

  if (type === 'badge') {
    return (
      <div className={`px-2 mr-3 rounded-lg transition-all ${
        status
          ? 'bg-yellow-400 text-sm font-semibold text-center float-left'
          : ''
      }`}
      >
        {status ? 'Reserved' : ''}
      </div>
    );
  }

  return (
    <div>Missing type</div>
  );
};

RocketComponent.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketComponent;
