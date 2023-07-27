import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reservedMission } from '../redux/missions/missionsSlice';

const MissionComponent = ({ type, status, itemId }) => {
  const dispatch = useDispatch();

  if (type === 'button') {
    return (
      <button
        data-testid={`button${itemId}`}
        onClick={() => {
          dispatch(reservedMission(itemId));
        }}
        className={`p-2 m-1 bg-transparent border-2 rounded-lg transition-all ${
          status
            ? ' border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold text-center'
            : 'border-slate-400 text-reslated-400 hover:bg-slate-400 hover:text-white font-semibold text-center'
        }`}
        type="button"
      >
        {status ? 'Leave ' : 'Join '}
        Mission
      </button>
    );
  }

  if (type === 'badge') {
    return (
      <div
        data-testid={`badge${itemId}`}
        className={`px-2 py-1 m-1 text-white rounded-lg transition-all ${
          status
            ? 'bg-cyan-400 text-sm text-center'
            : 'bg-slate-400 text-sm text-center'
        }`}
      >
        {status ? 'Active Member' : 'NOT A MEMBER'}
      </div>
    );
  }

  return <div>Missing Type</div>;
};

MissionComponent.propTypes = {
  type: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default MissionComponent;
