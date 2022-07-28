import React from 'react';
import './Button.css';

const SIZES = ['btn--md', 'btn--lg'];
const COLOR = ['btn--primary', 'btn--dark', 'btn--light'];

export const Button = ({
  text,
  icon,
  type,
  onClick,
  buttonSize,
  buttonColor
}) => {
  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor)
    ? buttonColor
    : COLOR[0];

  return (
      <button
        className={`btn ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}
      >
        <span>{text}</span>{icon}
      </button>
  );
};
