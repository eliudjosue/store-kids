import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  links: string[];
}

export function MobileMenu({ isOpen, onToggle, links }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="lg:hidden text-blue-900 hover:text-blue-700"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={onToggle} />
          <nav className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white">
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="p-4 border-b">
                <button
                  onClick={onToggle}
                  className="ml-auto text-blue-900 hover:text-blue-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex-1 px-4 py-6 space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      className="block py-2 text-lg font-medium text-blue-900 hover:text-blue-700"
                      onClick={onToggle}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}