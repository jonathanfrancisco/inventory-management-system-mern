import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Layout} from 'antd';
import LinkNav from './hoc/LinkNav';
import {ProtectedRoute} from './hoc/ProtectedRoute';
import Products from '../components/pages/Products';
import Categories from '../components/pages/Categories';
import Brands from '../components/pages/Brands';
import Login from '../components/pages/Login';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;




class App extends React.Component {

   state = {
      authenticated: false
   };

   handleLoginSubmit = (values) => {
      console.log(values);
      return false;
   }

   render() {
      return (
         <div className="App">
               <Router>
                  <React.Fragment>

                     {!this.state.authenticated? (
                        <React.Fragment>
                           <Switch>
                              <Route exact path={["/","/login"]} render={(routeProps) => <Login {...routeProps} handleSubmit={this.handleLoginSubmit}/>} />
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
                                    <Route exact path="/login" render={() => <Redirect to="/"/>} />
                                    <ProtectedRoute exact auth={this.state.authenticated} path="/products" component={Products}/>
                                    <ProtectedRoute exact auth={this.state.authenticated} path="/categories" component={Categories}/>
                                    <ProtectedRoute exact auth={this.state.authenticated} path="/brands" component={Brands}/>
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



