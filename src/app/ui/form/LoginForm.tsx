import React from 'react';
import { Box, Button, Link, TextField, Typography } from '@mui/material';
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
        <TextField
          variant="outlined"
          label="Email"
          className={styles.inputField}
        />
      </Box>
      <Box className={styles.input}>
        <TextField
          variant="outlined"
          label="Password"
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
      <Link></Link>
    </Box>
  );
}
