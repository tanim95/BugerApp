import React, { Component } from 'react';
import Burger from '../Components/Burger/Burger';
import Aux from '../hoc/Auxillary';
import BuildControlls from '../Components/Burger/BuildControlls';
import Modals from '../Components/UI/Modal/Modal';
import OrderNow from '../Components/Burger/OrderSummery';
import axios from '../axios-order';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  cheese: 1,
  meat: 1.5,
  bacon: 0.9,
};
class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    ingredients: {
      cheese: 0,
      meat: 0,
      bacon: 0,
      salad: 0,
    },
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
  };

  updateParchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(el => ingredients[el]);
    const sum2 = sum.reduce((a, b) => a + b);
    this.setState({ purchasable: sum2 > 0 });
  }
  purchaseHander = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHander = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHander = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'tanim',
        address: {
          street: '27 north dacota',
          postCode: 3654,
          country: 'Bangladesh',
        },
        deliveryMethod: 'drone',
      },
    };
    axios
      .post('/orders.json', order)
      .then(_ => this.setState({ purchasing: false }))
      .catch(err => {
        this.setState({ purchasing: false });
        console.log(err);
      });

    alert('We recived your order,Thank You!');
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    //////// price /////////
    const priceAdd = INGREDIENTS_PRICE[type] + this.state.totalPrice;

    this.setState({ totalPrice: priceAdd, ingredients: updatedIngredients });
    this.updateParchaseState(updatedIngredients);
  };
  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    if (newCount < 0) return;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    //////// price /////////
    const priceAdd = this.state.totalPrice - INGREDIENTS_PRICE[type];

    this.setState({ totalPrice: priceAdd, ingredients: updatedIngredients });
    this.updateParchaseState(updatedIngredients);
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    console.log(
      'if returns false then component will not update so componenetDidUpdate will not execute & the whole app wont work'
    );
    return true;
  }
  componentDidUpdate() {
    console.log('updated');
  }
  // componentDidMount() {
  //   console.log('hello');
  // }

  render() {
    return (
      <Aux>
        <Modals
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHander}
        >
          <OrderNow
            purchaseCancel={this.purchaseCancelHander}
            purchaseContinue={this.purchaseContinueHander}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          />
        </Modals>
        <Burger ingredients={this.state.ingredients} />
        <BuildControlls
          ingredientsAdd={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHander}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
