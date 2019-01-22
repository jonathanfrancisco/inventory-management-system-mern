import React from 'react';
import {Row, Col, Card} from 'antd';
import LoginForm from '../LoginForm';

class Login extends React.Component {
   render() {
      return (
         <Row type="flex" align="middle" style={{height: '100vh'}}>
            <Col  offset={8} span={8}>
               <Card>
                  <h2 style={{textAlign: 'center'}}>Inventory Management System <br />(MERN Stack)</h2>
                  <LoginForm onSubmit={this.props.handleSubmit} />
               </Card>
            </Col>
         </Row>
      );
   }
}

export default Login;