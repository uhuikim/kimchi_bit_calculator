import { css } from '@emotion/react';

export default css`
  svg {
    min-width: 2.3rem;
    min-height: 2.3rem;
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
      cursor: pointer;

      &:hover {
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
    transition: background-color 5000s ease-in-out 0s;
  }
`;
