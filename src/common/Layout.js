import React from 'react';
import styled from '@emotion/styled';
import Price from './Price';

const Layout = ({ children }) => {
  return (
    <Wrapped>
      <Price />
      {children}
    </Wrapped>
  );
};

export default Layout;

const Wrapped = styled.div`
  width: 960px;
  background: red;
  margin: 0 auto;
`;
