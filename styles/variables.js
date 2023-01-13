

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,

  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const theme = {
  dark: {
    primary: '#161616AA',
    primary1: '#888888AA',
    defaultBgGradient: 'linear-gradient(95deg, #263238aa, #212121aa)',
    text: '#EEEEEEAA'

  },
  light: {
    primary: '#EEEEEEAA',
    primary1: '#DDDDDDAA',
    text: '#161616AA'
  },
  device: device,
  fontFamily: 'Segue UI, sans-serif'
}