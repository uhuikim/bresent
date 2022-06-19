const fonts = [
  {
    family: 'SingleDay',
    weight: 400,
    name: 'SingleDay-Regular',
  },
];

export default fonts
  .map(
    ({ family, weight, name }) => `
      @font-face {
        font-family: '${family}';
        font-style: normal;
        font-weight: ${weight};
        src: local(${name}), url(/font/${name}.ttf) format('ttf');
      }
    `,
  )
  .join('');
