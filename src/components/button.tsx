// src/components/Button.tsx
import React from 'react';
import { theme } from '../styles/theme';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button style={{ backgroundColor: theme.colors.primary, color: theme.colors.secondary }}>
      {text}
    </button>
  );
};

export default Button;
