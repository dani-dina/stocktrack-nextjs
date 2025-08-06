import React from 'react';
import { ButtonProps } from '../types';

const Button : React.FC<ButtonProps> = ({className,href,onClick,children}) =>{
  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;