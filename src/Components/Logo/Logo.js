import React from 'react';
import burgerLogo from '../../Assets/Images/burgerLogo.png';
import css from './Logo.module.css';

const logo = props => {
  return (
    <div className={css.Logo}>
      <img src={burgerLogo} alt="Burger logo"></img>
    </div>
  );
};

export default logo;
