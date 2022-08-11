import React, { ChangeEvent, FC, useState } from 'react';
// import MapInterface from '../mapBox/MapInterface';
import Details from './Details';
import './Head.module.css';

interface IHeaderProps {}

const Header: FC = (props: IHeaderProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form>
        <input
          type='text'
          name='ip-address'
          id='ip-address'
          value={text}
          onChange={handleChange}
        />
        <button className='submit-btn'>
          <img src='./images/icon-arrow.svg' alt='+' />
        </button>
      </form>
      <Details />
    </header>
  );
};

export default Header;
