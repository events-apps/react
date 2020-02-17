import React from 'react';

interface SecondaryButtonProps {
  onClick: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2 px-4 rounded bg-transparent text-teal-500 hover:text-teal-700"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
