import { Box, Button } from '@mui/material';

// MUI Link
import { Link as MUILink } from '@mui/material';
// or use default export
// import MuiLink from '@mui/material/Link';

// Next link
import NextLink from 'next/link';

import styles from './NavMenus.module.css';

export default function NavMenus() {
  return (
    <Box sx={{ flexGrow: 0.5 }}>
      <NextLink
        href="/profile/dashboard"
        passHref
      >
        <MUILink
          component={Button}
          underline="none"
          className={styles.tab}
        >
          Dashboard
        </MUILink>
      </NextLink>
    </Box>
  );
}
