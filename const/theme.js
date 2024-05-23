import { StatusBar } from "react-native";

export const COLORS = {
    primary: {
      50: '#E3F2FD',    // Light Blue
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',   // Primary Blue
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
      A100: '#82B1FF',
      A200: '#448AFF',
      A400: '#2979FF',
      A700: '#2962FF',
    },
    secondary: {
      50: '#F1F3F4',    // Light Gray
      100: '#E8E8E8',
      200: '#D3D3D3',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',   // Gray
      600: '#616161',
      700: '#424242',
      800: '#303030',
      900: '#212121',
      A100: '#D5D5D5',
      A200: '#AAAAAA',
      A400: '#303030',
      A700: '#616161',
    },
    error: {
      50: '#FFEBEE',
      100: '#FFCDD2',
      200: '#EF9A9A',
      300: '#E57373',
      400: '#EF5350',
      500: '#F44336',   // Red
      600: '#E53935',
      700: '#D32F2F',
      800: '#C62828',
      900: '#B71C1C',
      A100: '#FF8A80',
      A200: '#FF5252',
      A400: '#FF1744',
      A700: '#D50000',
    },
    warning: {
      50: '#FFF8E1',
      100: '#FFECB3',
      200: '#FFE082',
      300: '#FFD54F',
      400: '#FFCA28',
      500: '#FFC107',   // Yellow
      600: '#FFB300',
      700: '#FFA000',
      800: '#FF8F00',
      900: '#FF6F00',
      A100: '#FFE57F',
      A200: '#FFD740',
      A400: '#FFC400',
      A700: '#FFAB00',
    },
    success: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6A',
      500: '#4CAF50',   // Green
      600: '#43A047',
      700: '#388E3C',
      800: '#2E7D32',
      900: '#1B5E20',
      A100: '#B9F6CA',
      A200: '#69F0AE',
      A400: '#00E676',
      A700: '#00C853',
    },
    text: {
      primary: '#000000', // Black
      secondary: '#5F6368', // Dark Gray
      hint: '#9E9E9E',
      disabled: '#BDBDBD',
    },
    background: {
      default: '#FFFFFF', // White
      paper: '#FAFAFA',
    },
  };
  
  export const FONT_SIZES = {
    small: 12,
    medium: 16,
    large: 20,
    extraLarge: 24,
  };
  
  export const FONT_WEIGHTS = {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  };
  
  export const BORDER_RADIUS = {
    small: 4,
    medium: 8,
    large: 16,
    extraLarge: 24,
  };
  export const SPACING = {
    extraSmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
  };
  export const STATUSBAR_HEIGHT = StatusBar.currentHeight 