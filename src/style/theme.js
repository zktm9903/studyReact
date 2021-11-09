const Colors = {
  bgColorRed: '#ff5555',
  bgColorOrange: '#ffb86c',
  displayColor: '#282a36',
  transparentWhite: 'rgba(255, 255, 255, 0.6)',
  lightGrey: '#eee',
  mediumGrey: '#ccc',
  lightOrange: '#fea170',
  mediumOrange: '#f78d6c',
};
const Size = {
  mobile: '770px',
  tabletS: '1023px',
  tabletM: '1220px',
  tabletL: '1280px',
  laptop: '1460px',
  dektop: '1700px',
};
const Res = {
  mobile: `(max-width: ${Size.mobile})`,
  tabletS: `(max-width:${Size.tabletS})`,
  tabletM: `(max_width:${Size.tabletM})`,
  tabletL: `(max_width:${Size.tabletL})`,
  laptop: `(max_width:${Size.laptop})`,
  dektop: `(max_width:${Size.dektop})`,
};
const theme = {
  Colors,
  Res,
};

export default theme;
