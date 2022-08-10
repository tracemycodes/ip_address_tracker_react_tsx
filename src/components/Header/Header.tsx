import React, { FC } from 'react';
// import MapInterface from '../mapBox/MapInterface';
import Details from './Details';
import './Head.module.css';

interface IHeaderProps {}

const Header: FC = (props: IHeaderProps) => {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <form>
        <input type='text' name='ip-address' id='ip-address' />
        <button className='submit-btn'>
          <img src='./images/icon-arrow.svg' alt='+' />
        </button>
      </form>
      <Details />
    </header>
  );
};

export default Header;
