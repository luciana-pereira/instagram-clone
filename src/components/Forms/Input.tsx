import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  // label: string,
  type: string;
  name: string;
  value: any;
  onChange: () => void;
  onBlur: () => void;
  label: string;
}

const Input = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  label,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        <span className={styles.span}>
          {label}
        </span>
        <input
          id={name}
          name={name}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      </label>
      <div className={styles.content}></div>
    </div>
  );
};

export default Input;
