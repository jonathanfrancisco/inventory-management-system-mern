import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Layout} from 'antd';
import LinkNav from './hoc/LinkNav';
import {ProtectedRoute} from './hoc/ProtectedRoute';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Brands from '../pages/Brands';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;




class App extends React.Component {

   render() {
      return (
         <div className="App">
               <Router>
                  <Layout className="layout" style={{minHeight: '100vh'}}>
                     <Header>
                        <div className="logo" />        
                        <LinkNav />      
                     </Header>
                     <Content style={{ padding: '30px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                           <Switch>
                              <ProtectedRoute exact path="/products" component={Products}/>
                              <ProtectedRoute exact path="/categories" component={Categories}/>
                              <ProtectedRoute exact path="/brands" component={Brands}/>
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



