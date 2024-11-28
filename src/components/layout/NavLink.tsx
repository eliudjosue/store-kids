import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}