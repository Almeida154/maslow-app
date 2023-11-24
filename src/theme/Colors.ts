import { StatusTheme, Theme } from './styled';

export const STATUS_COLORS: StatusTheme = {
  error: '#FF3838',
  warning: '#FFB302',
  success: '#00F060',
  info: '#2DCCFF',
};

export const DARK_THEME: Theme = Object.freeze({
  name: 'dark',
  background: '#070713',
  container: '#101020',
  border: '#191928',
  title: '#FFFFFF',
  text: '#A7A7A7',
  primary: '#9440FF',
  secondary: '#00D5FF',
  ...STATUS_COLORS,
});

export const LIGHT_THEME: Theme = Object.freeze({
  name: 'light',
  background: '#F5F5F5',
  container: '#FFFFFF',
  border: '#E0E0E0',
  title: '#000000',
  text: '#A7A7A7',
  primary: '#9440FF',
  secondary: '#00D5FF',
  ...STATUS_COLORS,
});
