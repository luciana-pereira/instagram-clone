import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  // label: string,
  type: string,
  name: string
  value: any,
  onChange: () => void,
  error: string,
  onBlur: () => void,
  placeholder: string
}

const Input = ({ type, name, value, onChange, error, onBlur, placeholder }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {/* <label htmlFor={name} className={styles.label}>
        {label}
      </label> */}
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
