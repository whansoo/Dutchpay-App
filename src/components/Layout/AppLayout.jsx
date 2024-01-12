import React from 'react';
import L from './Layout.styles';
import { Link } from 'react-router-dom';
import { HomeOutlined, UsergroupAddOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';

function AppLayout({ children }) {
  return (
  <L.Container>
    {children}
      <L.Layout>
        
            <Link to="/">
              <HomeOutlined style={{ fontSize: '30px', color: 'green'}}/>
            </Link>
            <Link to="/group">
              <UsergroupAddOutlined style={{ fontSize: '30px', color: 'green'}}/>
            </Link>
            <Link to="/members">
             <UserOutlined style={{ fontSize: '30px', color: 'green'}}/>
            </Link>
            <Link to="/expense">
             <ShoppingOutlined style={{ fontSize: '30px', color: 'green'}}/>
            </Link>
          </L.Layout>
    </L.Container>
  )
}

export default AppLayout;