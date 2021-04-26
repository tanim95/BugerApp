import React from 'react';
import css from './BuildControll.module.css';

const BuildControll = props => {
  return (
    <div className={css.BuildControll}>
      <div className={css.Label}>{props.label}</div>
      <button onClick={props.removed} className={css.Less}>
        Less
      </button>
      <button onClick={props.added} className={css.More}>
        More
      </button>
    </div>
  );
};

export default BuildControll;
