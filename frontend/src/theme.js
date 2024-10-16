import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
