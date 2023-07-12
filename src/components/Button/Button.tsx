import { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = {
  label: string,
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { label } = props;
  return (
    <button { ...props }>{label}</button>
  );
}

export default Button;
