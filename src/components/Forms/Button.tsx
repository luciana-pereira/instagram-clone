import { Box } from '@mui/material';
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Box className={styles.buttonContainer}>
      <button
        className={styles.button}
        type='submit'
        {...props}
        disabled
      >
        {children}
      </button>
    </Box>
  );
};

export default Button;
