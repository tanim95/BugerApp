import React from 'react';
import Aux from '../../hoc/Auxillary';
import Button from '../UI/Button/Button';

const OrderNow = props => {
  const ingredient = Object.keys(props.ingredients).map((el, i) => (
    <li key={el}>
      {el} : {props.ingredients[el]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p> A delicious Burger with the following ingredients:</p>
      <ul>{ingredient}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        Cancel
      </Button>
    </Aux>
  );
};
export default OrderNow;
