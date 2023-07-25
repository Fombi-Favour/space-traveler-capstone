import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMission } from '../redux/missions/missionsSlice';

const Profile = () => {
  const { value } = useSelector(selectMission);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (value.length > 0) {
      setData(value.filter((item) => item.reserved === true));
    }
  }, [value]);

  return (
    <div className="flex justify-center">
      <div className="flex max-w-wrap w-full py-6">
        <div className="flex justify-evenly w-full">
          <div className="border-2 border-slate-200 py-2 px-3 min-h-[100px] w-[40%] rounded-xl">
            <h1 className="text-center">My Missions</h1>
            <div className="my-3 flex flex-col justify-center items-center w-full">
              {data.length > 0 ? (
                data.map((item) => <div key={item.mission_id} className="w-[75%] py-3 border-2 border-slate-200 text-left px-4 first:rounded-t-xl last:rounded-b-xl">{item.mission_name}</div>)
              ) : (
                <div className="text-slate-300 capitalize">
                  currently no mission
                </div>
              )}
            </div>
          </div>
          <div className="border-2 border-slate-200 py-2 px-3 min-h-[100px] w-[40%] rounded-xl">
            <h1 className="text-center">My Rockets</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
