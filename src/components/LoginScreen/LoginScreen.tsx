import { Box } from '@mui/material';
import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import styles from './LoginScreen.module.css';

const LoginScreen = () => {
  return (
    <Box
    className={styles.loginContainer}
    >
      <Box
        className={styles.loginContent}
      >
        <Box
          className={styles.imgContainer}
        >
          <Box
            className={styles.content}
          >
            <img
              src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png'
              className={styles.image}
            />

          </Box>
        </Box>
        <SignIn />
      </Box>
    </Box>
  );
};

export default LoginScreen;
