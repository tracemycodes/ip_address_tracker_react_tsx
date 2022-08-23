import React, { FC, useContext } from 'react';
import styles from './Head.module.css';
import MapboxContext from '../../context/mapbox/mapboxContext';

export interface Props {}

const Details: FC = (props: Props) => {
  const context = useContext(MapboxContext);
  const { state } = context ? context : null!;
  const { ipAdd } = state;

  return (
    <>
      <section className={styles['details-section']}>
        <div>
          <h2>IP Address</h2>
          <p className='ip-num'>{ipAdd.ip}</p>
        </div>
        <div>
          <h2>Location</h2>
          <p className='ip-location'>
            {ipAdd.location.city}, {ipAdd.location.country}{' '}
            {ipAdd.location.postalCode}
          </p>
        </div>
        <div>
          <h2>Timezone</h2>
          <p className='ip-timezone'>UTC {ipAdd.location.timezone}</p>
        </div>
        <div>
          <h2>ISP</h2>
          <p className='ip-isp'>{ipAdd.isp}</p>
        </div>
      </section>
    </>
  );
};

export default Details;
