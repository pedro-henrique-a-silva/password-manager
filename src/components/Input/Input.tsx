import React, { InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  const { id, label, type } = props;
  return (
    <label
      className={ (type === 'checkbox') ? 'labelCheckbox' : 'labelInput' }
      htmlFor={ id }
    >
      {label}
      {(type === 'checkbox')
        ? <input className="inputCheckbox" { ...props } />
        : <input type="text" { ...props } />}
    </label>
  );
}

export default Input;
