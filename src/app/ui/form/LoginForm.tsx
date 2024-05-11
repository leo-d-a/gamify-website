import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
// import Paper from '@mui/material/Paper';

import styles from './Form.module.css';

export default function LoginForm() {
  return (
    <Box className={styles.container}>
      <Typography
        variant="h2"
        gutterBottom
        className={styles.title}
      >
        Login here!
      </Typography>
      <Box className={styles.input}>
        <Typography
          variant="overline"
          className={styles.inputLabel}
        >
          Email
        </Typography>
        <TextField
          variant="outlined"
          className={styles.inputField}
        />
      </Box>
      <Box className={styles.input}>
        <Typography
          variant="overline"
          className={styles.inputLabel}
        >
          Password
        </Typography>
        <TextField
          variant="outlined"
          type="password"
          className={styles.inputField}
        />
      </Box>
      <Button
        variant="outlined"
        className={styles.loginButton}
      >
        Login
      </Button>
    </Box>
  );
}
