import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setupRocket, selectRocket } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rockets.module.css';
// eslint-disable-next-line import/no-named-as-default
import RocketComponent from '../components/RocketComponent';

const Rockets = () => {
  const { status, content } = useSelector(selectRocket);
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
    if (content.length === 0) fetchRocket();
  }, [dispatch, content.length]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center mt-40 gap-3">
        <div className="border-8 border-[#a8a8a8] border-t-[#051cf1] w-20 h-20 text-transparent rounded-full animate-spin">100%</div>
        <h2 className="text-4xl text-[#051cf1]">Loading...</h2>
      </div>
    );
  }

  return (
    <section>
      {content.map((item) => (
        <main key={item.id}>
          <div className={styles.pics}>
            <img src={item.flickr_images} alt={item.rocket_name} />
          </div>
          <div className={styles.contents}>
            <div className={styles.text}>
              <h3 data-testid={item.id} className="text-2xl font-bold">{item.rocket_name}</h3>
              <h4 className="font-semibold capitalize">
                Type:
                {item.rocket_type}
              </h4>
            </div>
            <div>
              <RocketComponent status={item.reserved} type="badge" id={item.id} />
              <span>{item.description}</span>
            </div>
            <RocketComponent status={item.reserved} type="button" id={item.id} />
          </div>
        </main>
      ))}
    </section>
  );
};

export default Rockets;
