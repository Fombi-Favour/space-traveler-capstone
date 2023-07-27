import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMission, setupMission } from '../redux/missions/missionsSlice';
import MissionComponent from '../components/MissionComponent';

const Mission = () => {
  const dispatch = useDispatch();
  const { status, value } = useSelector(selectMission);

  useEffect(() => {
    const fetchMission = () => {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error();
        })
        .then((data) => {
          dispatch(setupMission(data));
        })
        .catch((err) => err.message);
    };
    if (value.length === 0) fetchMission();
  }, [dispatch, value.length]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center mt-40 gap-3">
        <div className="border-8 border-[#a8a8a8] border-t-[#051cf1] w-20 h-20 text-transparent rounded-full animate-spin">100%</div>
        <h2 className="text-4xl text-[#051cf1]">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex max-w-wrap w-full p-1">
        <table className="w-full mt-4 mb-6">
          <thead>
            <tr>
              <th className="w-[15%] px-2 py-1 text-left border-2 border-slate-200">
                Mission
              </th>
              <th className="w-[55%] px-2 py-1 text-left border-2 border-slate-200">
                Description
              </th>
              <th className="w-[15%] px-2 py-1 text-left border-2 border-slate-200">
                Status
              </th>
              <th
                className="w-[15%] px-2 py-1 text-left border-2 border-slate-200"
                aria-label="action-button"
              />
            </tr>
          </thead>
          <tbody>
            {value.map((item) => (
              <tr
                className="odd:bg-white even:bg-zinc-100"
                key={item.mission_id}
              >
                <td data-testid={item.mission_id} className="px-2 py-1 text-left border-2 border-slate-200">
                  {item.mission_name}
                </td>
                <td className="px-2 py-1 text-left border-2 border-slate-200">
                  <div>{item.description}</div>
                </td>
                <td className="px-2 py-1 text-left border-2 border-slate-200">
                  <MissionComponent status={item.reserved} type="badge" itemId={item.mission_id} />
                </td>
                <td className="px-2 py-1 text-left border-2 border-slate-200">
                  <div className="flex justify-center w-full">
                    <MissionComponent status={item.reserved} type="button" itemId={item.mission_id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mission;
