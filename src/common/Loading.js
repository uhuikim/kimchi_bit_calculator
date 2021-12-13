import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Loading = () => {
  return <LoadingSpin />;
};

export default Loading;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpin = styled.div`
  border: 3px solid hsla(353, 100%, 70%, 0.2);
  border-top-color: #f67a95;
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  animation: ${spin} 1s linear infinite;
`;
