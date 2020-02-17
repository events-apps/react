import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-700 text-white">
      {children}
    </button>
  );
};

export default PrimaryButton;
