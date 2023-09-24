import React from "react";

type ButtonProps = {
  color: string;
  value: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

function Button({ color, value, onClick, disabled }: ButtonProps) {
  return (
    <input
      type="button"
      value={value}
      className={`w-[120px] h-10 px-2 rounded-[30px] ml-[10px] text-white hover:cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: color }}
    />
  );
}

export default Button;
