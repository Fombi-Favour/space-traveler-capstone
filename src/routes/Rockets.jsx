import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setupRocket, selectRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const { status, value } = useSelector(selectRocket);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRocket = () => {
      fetch('https://api.spacexdata.com/v3/rockets')
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error();
        })
        .then((data) => {
          dispatch(setupRocket(data));
        })
        .catch((err) => err.message);
    };
    if (value.length === 0) fetchRocket();
  }, [dispatch, value.length]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center">
        <div className="flex justify-center">Loading...</div>
      </div>
    );
  }

  return (
    <main className="py-4 px-[6rem]">
      {value.map((item) => (
        <div key={item.id} className="flex gap-5 mx-0 my-4">
          <div>
            <img src={item.flickr_images} alt={item.rocket_name} className="w-[24rem] h-[16rem]" />
          </div>
          <div className="flex flex-col items-start gap-5">
            <div className="flex gap-[20rem]">
              <h3>{item.rocket_name}</h3>
              <h4>
                Type:

                {item.rocket_type}
              </h4>
            </div>
            <span>{item.description}</span>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Rockets;
