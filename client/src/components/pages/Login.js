import React from 'react';
import {Row, Col, Card} from 'antd';
import LoginForm from '../LoginForm';

class Login extends React.Component {

   handleSubmit(values) {
      alert('You submitted the form!');
      console.log('here are the values', values);
   }

   render() {
      return (
         <Row type="flex" align="middle" style={{height: '100vh'}}>
            <Col  offset={8} span={8}>
               <Card>
                  <h2 style={{textAlign: 'center'}}>Inventory Management System <br />(MERN Stack)</h2>
                  <LoginForm onSubmit={this.handleSubmit}/>
               </Card>
            </Col>
         </Row>
      );
   }
}

export default Login;