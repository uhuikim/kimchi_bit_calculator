import React from 'react';
import styled from '@emotion/styled';
import UpbitPrice from './UpbitPrice';
import BinancePrice from './BinancePrice';
import Dollar from './Dollar';

const Layout = ({ children }) => {
  return (
    <Wrapped>
      <UpbitPrice />
      <BinancePrice />
      <Dollar />
      {children}
    </Wrapped>
  );
};

export default Layout;

const Wrapped = styled.div`
  width: 960px;
  margin: 0 auto;
`;
