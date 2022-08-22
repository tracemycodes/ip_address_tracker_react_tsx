import React, { ReactElement } from 'react';
import styles from './Head.module.css';

export interface Props {
  locationInfo: {
    ip: string;
    location: {
      country: string;
      region: string;
      city: string;
      lat: number;
      lng: number;
      postalCode: string;
      timezone: string;
      geonameId: number;
    };
    domains: string[];
    as: {
      asn: number;
      name: string;
      route: string;
      domain: string;
      type: string;
    };
    isp: string;
  };
}

function Details({ locationInfo }: Props): ReactElement {
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
}

export default Details;
