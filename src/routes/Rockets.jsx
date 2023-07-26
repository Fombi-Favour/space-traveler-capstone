import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setupRocket, selectRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';

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
    <section>
      {value.map((item) => (
        <main key={item.id}>
          <div className={styles.pics}>
            <img src={item.flickr_images} alt={item.rocket_name} />
          </div>
          <div className={styles.contents}>
            <div className={styles.text}>
              <h3 className="text-2xl font-bold">{item.rocket_name}</h3>
              <h4 className="font-semibold capitalize">
                Type:
                {item.rocket_type}
              </h4>
            </div>
            <span>{item.description}</span>
            <button type="button" className={styles.reserve}>Reserve Rocket</button>
          </div>
        </main>
      ))}
    </section>
  );
};

export default Rockets;
