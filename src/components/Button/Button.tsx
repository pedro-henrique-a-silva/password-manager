import { ButtonHTMLAttributes } from 'react';
import './Button.css';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button { ...props } />
  );
}

export default Button;
