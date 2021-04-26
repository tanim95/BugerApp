import React from 'react';
import css from './BackDrop.module.css';

const Backdrop = props => {
  return props.show ? (
    <div className={css.backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
