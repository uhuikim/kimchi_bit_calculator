import { css } from '@emotion/react';

import { palette } from './variables';

export default css`
  svg {
    min-width: 2.3rem;
    min-height: 2.3rem;
  }
  a {
    color: ${palette.black};
  }
  a,
  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ol,
  ul,
  dl {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  dd {
    margin: 0;
  }

  button {
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: unset;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: 0;
    }
    &:disabled {
      cursor: default;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    -webkit-appearance: none;

    &-thumb {
      border-radius: 4px;
      background: ${palette.gray400};
      cursor: pointer;

      &:hover {
        background: ${palette.gray400};
      }
    }
  }

  /* 자동 완성 style */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  select:-webkit-autofill,
  select:-webkit-autofill:hover {
    -webkit-text-fill-color: ${palette.gray100};
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-webkit-autofill:focus,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${palette.white};
  }
`;
