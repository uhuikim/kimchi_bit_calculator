const fonts = [
  {
    family: 'Nunito Sans',
    weight: 100,
    name: 'NunitoSans-Light',
  },
  {
    family: 'Nunito Sans',
    weight: 300,
    name: 'NunitoSans-Regular',
  },
  {
    family: 'Nunito Sans',
    weight: 500,
    name: 'NunitoSans-SemiBold',
  },
  {
    family: 'Nunito Sans',
    weight: 700,
    name: 'NunitoSans-Bold',
  },
  {
    family: 'Nunito Sans',
    weight: 800,
    name: 'NunitoSans-ExtraBold',
  },
];

export default fonts
  .map(
    ({ family, weight, name }) => `
      @font-face {
        font-family: '${family}';
        font-style: normal;
        font-weight: ${weight};
        src: local(${name}), url(/fonts/${name}.ttf) format('ttf');
      }
    `,
  )
  .join('');
