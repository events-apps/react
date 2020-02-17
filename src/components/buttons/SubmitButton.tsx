import React from 'react';

const SubmitButton: React.FC = ({ children }) => {
  return (
    <button type="submit" className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-700 text-white">
      {children}
    </button>
  );
};

export default SubmitButton;
