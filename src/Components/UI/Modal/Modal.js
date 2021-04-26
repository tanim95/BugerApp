import React from 'react';
import css from './Modal.module.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../BackDrop/BackDrop';

const Modals = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        style={{
          opacity: props.show ? '1' : '0',
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        }}
        className={css.Modal}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modals;
