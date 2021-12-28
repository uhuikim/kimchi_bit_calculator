import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';
import PriceArea from './PriceArea';
import Calculator from './Calculator';

const Layout = ({ children }) => {
  return (
    <Wrapped>
      <Header />
      <PriceArea />
      <Calculator />

      {children}
    </Wrapped>
  );
};

export default Layout;

const Wrapped = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
