import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Layout} from 'antd';
import LinkNav from './hoc/LinkNav';
import {ProtectedRoute} from './hoc/ProtectedRoute';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Brands from '../pages/Brands';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;




class App extends React.Component {

   state = {
      authenticated: false
   };

   render() {
      return (
         <div className="App">
               <Router>
                  <React.Fragment>

                     {!this.state.authenticated? (
                        <React.Fragment>
                           <Switch>
                              <Route exact path={["/","/login"]} render={() => <h1>Login Form</h1>} />
                              <Route render={() => <h3>Error 404. URL not found.</h3>}/>
                           </Switch>
                        </React.Fragment>
                          
                     ) : (<Layout className="layout" style={{minHeight: '100vh'}}>
                           <Header>
                              <div className="logo" />        
                              <LinkNav />      
                           </Header>
                           <Content style={{ padding: '30px' }}>
                              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                 <Switch>
                                    <Route exact path="/" render={() => <Redirect to="/products"/>}/>
                                    <ProtectedRoute auth={this.state.authenticated} path="/products" component={Products}/>
                                    <ProtectedRoute auth={this.state.authenticated} path="/categories" component={Categories}/>
                                    <ProtectedRoute auth={this.state.authenticated} path="/brands" component={Brands}/>
                                    <Route render={() => <h3>Error 404. URL not found.</h3>}/>
                                 </Switch>
                              </div>
                           </Content>
                        </Layout> 
                     )}
                  </React.Fragment>
               </Router>
         </div>
      );
   }
   
}

export default App;



