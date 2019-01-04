import React from 'react';
import {Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom';

const LinkNav = withRouter((props) => {
   return (
      <Menu
         theme="dark"
         mode="horizontal"
         selectedKeys={[props.location.pathname]}
         style={{ lineHeight: '64px' }}
         >
         <Menu.Item key="/products"><Link to="/products">Products</Link></Menu.Item>
         <Menu.Item key="/categories"><Link to="/categories">Categories</Link></Menu.Item>
         <Menu.Item key="/brands"><Link to="/brands">Brands</Link></Menu.Item>
      </Menu>
   );
});

export default LinkNav;