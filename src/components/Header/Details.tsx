import React, { FC } from 'react';
import styles from './Head.module.css';

export interface Props {}

const Details: FC = (props: Props) => {
  return (
    <>
      <section className={styles['details-section']}>
        <div>
          <h2>IP Address</h2>
          <p className='ip-num' />
        </div>
        <div>
          <h2>Location</h2>
          <p className='ip-location' />
        </div>
        <div>
          <h2>Timezone</h2>
          <p className='ip-timezone' />
        </div>
        <div>
          <h2>ISP</h2>
          <p className='ip-isp' />
        </div>
      </section>
    </>
  );
};

export default Details;
