import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Details from './Details';
import './Head.module.css';

interface IHeaderProps {}

const Header: FC = (props: IHeaderProps) => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await fetch(
        'https://geo.ipify.org/api/v2/country,city?apiKey=at_0s9wTyAQNDvDt3WxY5WA5EhdzjRzv&ipAddress=8.8.8.8'
      );
      console.log(data);
    } catch (err) {
      console.log(err);
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
          <img src='./images/icon-arrow.svg' alt='+' />
        </button>
      </form>
      <Details />
    </header>
  );
};

export default Header;
