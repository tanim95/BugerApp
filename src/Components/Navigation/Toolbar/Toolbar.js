import React from 'react';
import css from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../../Navigation/Navigation';

const ToolBar = props => {
  return (
    <header className={css.Toolbar}>
      <Logo />
      <nav>
        <Navigation />
      </nav>
    </header>
  );
};

export default ToolBar;
