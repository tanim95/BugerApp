import React from 'react';
import Aux from '../../hoc/Auxillary';
import css from './Layout.module.css';

const Layout = props => {
  return (
    <Aux>
      <main className={css.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
