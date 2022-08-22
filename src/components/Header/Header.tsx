import React, { ChangeEvent, ReactElement, FormEvent, useState } from 'react';
import Details from './Details';
import { isValidIpAddress } from '../../utils/isValidIpAddress';
import './Head.module.css';

interface IHeaderProps {
  // locationInfo: any;
}

const locationInfosInitialState = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.40599,
    lng: -122.078514,
    postalCode: '94043',
    timezone: '-07:00',
    geonameId: 5375481,
  },
  domains: [
    '0d2.net',
    '003725.com',
    '0f6.b0094c.cn',
    '007515.com',
    '0guhi.jocose.cn',
  ],
  as: {
    asn: 15169,
    name: 'Google LLC',
    route: '8.8.8.0/24',
    domain: 'https://about.google/intl/en/',
    type: 'Content',
  },
  isp: 'Google LLC',
};

function Header(props: IHeaderProps): ReactElement {
  const [text, setText] = useState<string>('');
  const [locationInfos, setLocationInfos] = useState<any>(
    locationInfosInitialState
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidIpAddress(text)) {
      try {
        const data = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_0s9wTyAQNDvDt3WxY5WA5EhdzjRzv&ipAddress=${text}`
        );
        setLocationInfos(data);
      } catch (err) {
        console.log(err);
      }
    }

    setText('');
  };

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='ip-address'
          id='ip-address'
          value={text}
          onChange={handleChange}
        />
        <button className='submit-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
            <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
          </svg>
        </button>
      </form>
      <Details locationInfo={locationInfos} />
    </header>
  );
}

export default Header;
