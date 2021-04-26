import React from 'react';
import css from '../Navigation/Navigation.module.css';

const Navigation = props => {
  return (
    <ul>
      <li className={css.Navli}>
        <a href="/">Home</a>
      </li>
      <li className={css.Navli}>
        <a href="/">Menu</a>
      </li>
      <li className={css.Navli}>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
