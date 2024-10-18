const colors = {
  themeColor: '#006241',
  white: '#FFFFFF',
  black: '#000000',
  rangoon: '#1E2022',
  greenOff: '#75A545',
  paleSky: '#6D7278',
  red: '#FF0000',
  vistaWhite: '#F8F8F8',
  transparent: 'rgba(0,0,0,0)',
  blue: '#243C96',
  blue2: '#070707',
  blue3: '#F1F5FE',
  red1: '#D01212',
  redOff: '#FFF5ED',
  blackOpacity40: 'rgba(0,0,0,0.4)',
  blackOpacity80: 'rgba(0,0,0,0.8)',
  blackOpacity90: 'rgba(0,0,0,0.9)',
  whiteOpacity80: 'rgba(255,255,255,0.8)',
  grey: '#C6C6C6',
  grey1: '#E8E8E8',
  grey2: '#00000066',
  grey3: '#F4F4F4',
  grey4: '#DDDDDD',
  grey6: '#E5E5E5',
  greenOff1: '#F6FFED',
  grey7: '#d3c2be',
  grey8: '#6E6E6E29',
};
export type Colors = typeof colors;

export const updateColorsConfig = (
  colorCode: string,
  colorKey: keyof Colors,
) => {
  colors[colorKey] = colorCode;
};

export default colors;
