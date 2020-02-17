import React from 'react';
import { Link, LinkProps } from '@reach/router';

const LinkAsButton: React.FC<LinkProps<{}>> = ({ children, to }) => {
  return (
    <Link to={to} className="py-2 px-4 rounded bg-teal-500 hover:bg-teal-700 text-white">
      {children}
    </Link>
  );
};

export default LinkAsButton;
