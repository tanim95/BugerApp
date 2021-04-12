import React from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from '././Containers/BurgerBuilder';

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <p>this is a paragraph</p>
        </Layout>
        <BurgerBuilder></BurgerBuilder>
      </div>
    );
  }
}
export default App;
