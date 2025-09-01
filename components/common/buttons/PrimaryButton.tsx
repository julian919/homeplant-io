import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-[#7A8D5D] text-white font-bold py-3 px-8 rounded-full mt-8 hover:bg-[#6B7B50] transition-colors"
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
