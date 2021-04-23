import React from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from '././Containers/BurgerBuilder';
import ToolBar from './Components/Navigation/Toolbar/Toolbar';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <ToolBar />
        <BurgerBuilder />
      </Layout>
    );
  }
}
export default App;
