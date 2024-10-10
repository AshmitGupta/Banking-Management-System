import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/actions';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Paper,
} from '@mui/material';

const AddAccount = () => {
  const [account, setAccount] = useState({
    account_number: '',
    first_name: '',
    last_name: '',
    dob: '',
    c_balance: '',
    s_balance: '',
    doa: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccount(account));

    setAccount({
      account_number: '',
      first_name: '',
      last_name: '',
      dob: '',
      c_balance: '',
      s_balance: '',
      doa: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Add New Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Account Number"
                variant="outlined"
                fullWidth
                value={account.account_number}
                onChange={(e) =>
                  setAccount({ ...account, account_number: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={account.first_name}
                onChange={(e) =>
                  setAccount({ ...account, first_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                value={account.last_name}
                onChange={(e) =>
                  setAccount({ ...account, last_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                variant="outlined"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={account.dob}
                onChange={(e) => setAccount({ ...account, dob: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Checking Account Balance"
                variant="outlined"
                fullWidth
                type="number"
                value={account.c_balance}
                onChange={(e) =>
                  setAccount({ ...account, c_balance: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Savings Account Balance"
                variant="outlined"
                fullWidth
                type="number"
                value={account.s_balance}
                onChange={(e) =>
                  setAccount({ ...account, s_balance: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Account Creation"
                variant="outlined"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={account.doa}
                onChange={(e) => setAccount({ ...account, doa: e.target.value })}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Account
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddAccount;
