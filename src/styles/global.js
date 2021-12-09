import { css } from '@emotion/react';
import normalize from 'emotion-normalize';

import base from './base';
import fonts from './fonts';
import { palette } from './variables';

export default css`
  ${fonts}
  ${normalize}
  ${base}
  
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    color: ${palette.black};
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1.5;
    background: ${palette.primary100};
  }

  input[type='radio'],
  input[type='checkbox'] {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${palette.gray100};
  }

  #root {
    min-height: 100vh;
  }
`;
