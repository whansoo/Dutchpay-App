import React from 'react';
import L from './Layout.styles';

function AppLayout({ children }) {
  return <L.Container>{children}</L.Container>;
}

export default AppLayout;