import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddAccount from './components/AddAccount';
import ViewAccounts from './components/ViewAccounts';
import SearchAccount from './components/SearchAccount';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Banking Management System
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Add Account
              </Button>
              <Button color="inherit" component={Link} to="/view">
                View Accounts
              </Button>
              <Button color="inherit" component={Link} to="/search">
                Search Account
              </Button>
            </Toolbar>
          </AppBar>

          <Container>
            <Routes>
              <Route path="/" element={<AddAccount />} />
              <Route path="/view" element={<ViewAccounts />} />
              <Route path="/search" element={<SearchAccount />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </Provider>
  );
}

export default App;
