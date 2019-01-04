import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Layout} from 'antd';
import LinkNav from './hoc/LinkNav';
import {ProtectedRoute} from './hoc/ProtectedRoute';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;



const BrandPage = () => {
   return <h1>Hello World </h1>;
};

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
                              <ProtectedRoute exact path="/products" render={BrandPage}/>
                              <ProtectedRoute exact path="/categories" render={BrandPage}/>
                              <ProtectedRoute exact path="/brands" component={BrandPage}/>
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



