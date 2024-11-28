import React, { useState } from 'react';
import { Phone, ShoppingCart, Search, Facebook, Instagram } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

const navigationLinks = [
  'Inicio', 'Bautizo', 'Bebé', 'Niño', 'Niña', 'Complementos',
  'Outlet', 'Marcas', 'Sobre Nosotros', 'Contacto'
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#d7eef8] relative">
      <div className="wave-bg absolute inset-0 z-0"></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Pompitas Logo" className="h-12 w-12" />
            <h1 className="font-dancing-script text-2xl sm:text-3xl font-bold text-blue-900">
              Pompitas Moda Infantil
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="tel:672094167"
              className="hidden sm:flex items-center text-blue-900 hover:text-blue-700"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>672 094 167</span>
            </a>
            
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-blue-900 hover:text-blue-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-900 hover:text-blue-700">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-blue-100 focus:border-blue-300 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="flex items-center text-blue-900 hover:text-blue-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline ml-2">Mi Compra: Vacío</span>
            </button>

            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              links={navigationLinks}
            />
          </div>
        </div>
        
        <nav className="mt-4 hidden lg:block">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navigationLinks.map((item) => (
              <NavLink key={item} href={`/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}