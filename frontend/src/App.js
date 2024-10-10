import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, Typography } from '@mui/material';
import AddAccount from './components/AddAccount';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Banking Management System
        </Typography>
        <AddAccount />
      </Container>
    </Provider>
  );
}

export default App;
