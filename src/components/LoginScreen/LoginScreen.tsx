import { Box } from '@mui/material';
import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import styles from './LoginScreen.module.css';

const LoginScreen = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fafafa",
        flexGrow: 1,
        order: 4,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          justifyContent: "center",
          margin: "32px auto 0",
          maxWidth: "935px",
          paddingBottom: "32px",
          width: "100%",
        }}
      >
        <img
          src="https://www.instagram.com/static/images/homepage/phones/home-phones-2x.png/cbc7174b4f05.png"
          alt="tela de celular com perfil e fotos"
          className={styles.image}
        />
        <SignIn />
      </Box>
    </Box>
  );
};

export default LoginScreen;
