import React from 'react';
import css from './BuildControlls.module.css';
import BuildControll from './BuildControll';

const controll = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControlls = props => {
  return (
    <div className={css.BuildControlls}>
      <p>
        Current Price : <strong>${props.price.toFixed(2)}</strong>
      </p>

      {controll.map(ctrl => {
        return (
          <BuildControll
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientsAdd(ctrl.type)}
            removed={() => props.ingredientsRemoved(ctrl.type)}
          />
        );
      })}

      <button
        disabled={!props.purchasable}
        className={css.OrderButton}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControlls;
