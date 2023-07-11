import React, { InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  const { id, label } = props;
  return (
    <label className="labelInput" htmlFor={ id }>
      {label}
      <input type="text" { ...props } />
    </label>
  );
}

export default Input;
