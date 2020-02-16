import React from 'react';

const PageContent: React.FC = ({ children }) => {
  return <main className="w-full mx-auto px-16 pt-4">{children}</main>;
};

export default PageContent;
