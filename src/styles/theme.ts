import { Theme } from '@emotion/react';

const colors = {
  white: '#fff',
  black: '#000',
  surfaceDp: {
    '1': '#e1e1e1',
    '2': '#222222',
    '3': '#242424',
    '4': '#272727',
    '6': '#2c2c2c',
    '8': '#2e2e2e',
    '12': '#333333',
    '16': '#343434',
    '24': '#383838'
  },
  gray: {
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121'
  },
  cyan: {
    '1': '#99ffff',
    '2': '#4dffff',
    '3': '#61ffff',
    '4': '#03dac6'
  },
  red: {
    '1': '#de0000',
    '2': '#990000',
    '3': '#610000'
  },
  purple: {
    '1': '#7579e7',
    '2': '#3700b3'
  },
  primary: '#7579e7',
  primaryDark: '#3700b3',
  surface: '#121212',
  strong: '#edffff'
};

const breakPoint = {
  mobile: '575.98px',
  tablet: '767.98px',
  smallDesktop: '991.98px',
  desktop: '1199.98px'
};

const device = {
  mobile: `@media only screen and (max-width: ${breakPoint.mobile}px)`,
  tablet: `@media only screen and (max-width: ${breakPoint.tablet}px)`,
  smallDesktop: `@media only screen and (max-width: ${breakPoint.smallDesktop}px)`,
  desktop: `@media only screen and (max-width: ${breakPoint.desktop}px)`
};

const lightThemeColors = {
  background: colors.white,
  searchToolbar: colors.surfaceDp[24],
  icon: {
    default: colors.cyan[2]
  },
  vote: {
    holderUnChecked: colors.surfaceDp[24],
    holderChecked: colors.primary,
    unchecked: colors.cyan[3],
    checked: colors.cyan[1]
  },
  divider: colors.surfaceDp[24],
  text: {
    'critical-default': colors.red[1],
    'critical-hover': colors.red[2],
    'critical-disabled': colors.red[3]
  }
};

const darkThemeColors = {
  background: colors.surfaceDp[3],
  searchToolbar: colors.surfaceDp[24],
  icon: {
    default: colors.cyan[2]
  },
  vote: {
    holderUnChecked: colors.surfaceDp[24],
    holderChecked: colors.primary,
    unchecked: colors.cyan[3],
    checked: colors.cyan[1]
  },
  divider: colors.surfaceDp[24],
  text: {
    // 'critical-default': colors.red[1],
    'critical-default': colors.primary,
    'critical-hover': colors.red[2],
    'critical-disabled': colors.red[3]
  }
};

export const lightTheme: Theme = {
  colors: lightThemeColors,
  device
};

export const darkTheme: Theme = {
  colors: darkThemeColors,
  device
};
