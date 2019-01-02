import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Layout} from 'antd';
import LinkNav from './hoc/LinkNav';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;



class App extends React.Component {

   render() {
      return (
         <div className="App">
               <Router>
                  <Layout className="layout">
                     <Header>
                        <div className="logo" />        
                        <LinkNav />      
                     </Header>
                     <Content style={{ padding: '30px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                           <Switch>
                              <Route exact path="/products" render={() => <h1>Products</h1>}/>
                              <Route exact path="/categories" render={() => <h1>Categories</h1>}/>
                              <Route exact path="/brands" render={() => <h1>Brands</h1>}/>
                           </Switch>
                        </div>
                     </Content>
                  </Layout>
               </Router>
         </div>
      );
   }
   
}

export default App;



