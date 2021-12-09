const palette = {
  lightbg: '#EEF2F7',
  white: '#ffffff',

  black: '#333333',
  black100: '#e5e5e5',
  black200: '',
  black300: '#6c757d',
  black400: '#5d5d5d',

  darkgray: '#323A46',

  gray: '#8998AA',
  gray100: '#E6E6EF',
  gray200: '#C8CBDC',
  gray300: '#999CB2',
  gray400: '#6D7294',
  gray500: '#42486F',
  gray600: '#383D5E',
  gray700: '#2D314C',
  gray800: '#24273C',
  gray900: '#1F2133',
  gray990: '#161721',

  primary: '#2c8ef8',
  primary100: '#f3f3f3',
  primary200: '#e8ebff',
  primary300: '#39afd1',
  primary600: '#727cf5',
  secondary: '#6c757d',

  sky: '#3498db',
  blue: '#2c8ef8',
  indigo: '#727cf5',
  purple: '#6b5eae',
  pink: '#ff679b',
  red: '#fa5c7c',
  orange: '#fd7e14',
  yellow: '#ffbc00',
  green: '#0acf97',
  teal: '#02a8b5',
  cyan: '#39afd1',
  success: '#0acf97',
  info: '#39afd1',
  warning: '#ffbc00',
  danger: ' #fa5c7c',
  dark: '#313a46',
};

const spacing = {
  xxs: `4px`,
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '28px',
  xxxl: '32px',
  h: '36px',
  xh: '40px',
  xxh: '80px',
};

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const fontSize = {
  display1: `${96 / 16}rem`,
  display2: `${88 / 16}rem`,
  display3: `${72 / 16}rem`,
  display4: `${56 / 16}rem`,
  h1: `${42 / 16}rem`,
  h2: `${36 / 16}rem`,
  h3: `${28 / 16}rem`,
  h4: `${24 / 16}rem`,
  h5: `${20 / 16}rem`,
  h6: `${18 / 16}rem`,
  text: `${16 / 16}rem`,
  small: `${12 / 16}rem`,
  body: `${24 / 16}rem`,
  body2: `${14 / 16}rem`,
  body3: `${12 / 16}rem`,
  body4: `${10 / 16}rem`,
};

export { palette, spacing, fontSize, breakpoints };
