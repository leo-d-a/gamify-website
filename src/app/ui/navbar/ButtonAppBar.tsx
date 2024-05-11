import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NavMenus from './NavMenus';

// MUI Link
import { Link as MUILink } from '@mui/material';
// or use default export
// import MuiLink from '@mui/material/Link';

// Next link
import NextLink from 'next/link';

import styles from './ButtonAppBar.module.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', top: '0' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="../../"
          >
            <HomeRoundedIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.6 }}
          >
            News
          </Typography>
          <NavMenus />
          <NextLink
            href="/auth/login"
            passHref
          >
            <MUILink
              component={Button}
              underline="none"
              className={styles.button}
            >
              Login
            </MUILink>
          </NextLink>
          <NextLink
            href="/auth/signup"
            passHref
          >
            <MUILink
              component={Button}
              underline="none"
              className={styles.button}
            >
              Sign Up
            </MUILink>
          </NextLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
