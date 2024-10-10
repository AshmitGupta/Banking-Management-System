import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccount } from '../redux/actions';

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
    <div>
      <h2>Add New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account Number: </label>
          <input
            type="text"
            value={account.account_number}
            onChange={(e) =>
              setAccount({ ...account, account_number: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={account.first_name}
            onChange={(e) =>
              setAccount({ ...account, first_name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={account.last_name}
            onChange={(e) =>
              setAccount({ ...account, last_name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Date of Birth: </label>
          <input
            type="date"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Checking Account Balance: </label>
          <input
            type="number"
            value={account.c_balance}
            onChange={(e) =>
              setAccount({ ...account, c_balance: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Savings Account Balance: </label>
          <input
            type="number"
            value={account.s_balance}
            onChange={(e) =>
              setAccount({ ...account, s_balance: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Date of Account Creation: </label>
          <input
            type="date"
            value={account.doa}
            onChange={(e) => setAccount({ ...account, doa: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
};

export default AddAccount;
