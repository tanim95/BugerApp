import React from 'react';
import css from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(el => {
      return [...Array(props.ingredients[el])].map((_, i) => {
        return <BurgerIngredients key={el + i} type={el} />;
      });
    })
    .flat();

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={css.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
