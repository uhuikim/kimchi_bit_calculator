import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

import base from './base';

export default css`
  ${normalize}
  ${base}
  
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1.5;
  }

  input[type='radio'],
  input[type='checkbox'] {
  }

  #root {
    min-height: 100vh;
  }
`;
