const size = { mobile: '320px', tabletS: '481px', tabletM: '768px', tabletL: '991px', desktop: '1200px' };

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tabletM: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`
};