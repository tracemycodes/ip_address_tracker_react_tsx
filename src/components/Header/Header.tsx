import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import Details from './Details';
import './Head.module.css';
import MapboxContext from '../../context/mapbox/mapboxContext';
import * as actionTypes from '../../context/types';

interface IHeaderProps {}

const Header: FC = (props: IHeaderProps) => {
  const context = useContext(MapboxContext);
  const { dispatch } = context ? context : null!;

  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_0s9wTyAQNDvDt3WxY5WA5EhdzjRzv&ipAddress=${text}`
      );

      const data = await response.json();

      dispatch({
        type: actionTypes.GEO_LOCATION_SUCCESS,
        payload: data,
      });
    } catch (err) {}
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
      <Details />
    </header>
  );
};

export default Header;
