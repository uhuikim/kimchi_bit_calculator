import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapped>
      <Title>계산기</Title>
    </Wrapped>
  );
};

export default Header;

const Wrapped = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 2rem 0;
`;
