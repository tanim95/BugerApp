import React from 'react';
import css from './Button.module.css';

const Button = props => {
  return (
    <button
      onClick={props.clicked}
      className={[css.Button, css[props.btnType]].join(' ')}
    >
      {props.children}
    </button>
  );
};

export default Button;
