import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMission } from '../redux/missions/missionsSlice';
import { selectRocket } from '../redux/rockets/rocketsSlice';
import RocketComponent from '../components/RocketComponent';
import MissionComponent from '../components/MissionComponent';

const Profile = () => {
  const { value } = useSelector(selectMission);
  const { content } = useSelector(selectRocket);
  const [data, setData] = useState([]);
  const [rocketData, setRocketData] = useState([]);
  useEffect(() => {
    if (value.length > 0) {
      setData(value.filter((item) => item.reserved === true));
    }
    if (content.length > 0) {
      setRocketData(content.filter((item) => item.reserved === true));
    }
  }, [value, content]);

  return (
    <div className="flex justify-center">
      <div className="flex max-w-wrap w-full py-6">
        <div className="flex justify-evenly w-full">
          <div className="border-2 border-slate-200 py-2 px-3 min-h-[100px] w-[40%] rounded-xl">
            <h1 className="text-center">My Missions</h1>
            <div className="my-3 flex flex-col justify-center items-center w-full">
              {data.length > 0 ? (
                data.map((item) => (
                  <div
                    key={item.mission_id} data-testid={item.mission_id}
                    className="w-full flex items-center justify-between py-3 border-2 border-slate-200 text-left px-4 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item.mission_name}
                    <MissionComponent status={item.reserved} type="button" itemId={item.mission_id} />
                  </div>
                ))
              ) : (
                <div className="text-slate-300 capitalize">
                  currently no mission
                </div>
              )}
            </div>
          </div>
          <div className="border-2 border-slate-200 py-2 px-3 min-h-[100px] w-[40%] rounded-xl">
            <h1 className="text-center">My Rockets</h1>
            <div className="my-3 flex flex-col justify-center items-center w-full">
              {rocketData.length > 0 ? (
                rocketData.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex items-center justify-between py-3 border-2 border-slate-200 text-left px-4 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item.rocket_name}
                    <RocketComponent status={item.reserved} type="button" id={item.id} />
                  </div>
                ))
              ) : (
                <div className="text-slate-300 capitalize">
                  currently no rocket
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
