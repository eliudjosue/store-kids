import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#d7eef8] pt-8 sm:pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-lg sm:text-xl font-dancing-script text-blue-900 mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {['Términos y Condiciones', 'Política de Privacidad', 'Devoluciones'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm sm:text-base text-gray-600 hover:text-blue-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg sm:text-xl font-dancing-script text-blue-900 mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                672 094 167
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                info@pompitas.es
              </li>
              <li className="flex items-center text-sm sm:text-base text-gray-600">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                Calle Example 123, Madrid
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-lg sm:text-xl font-dancing-script text-blue-900 mb-4">
              Ubicación
            </h4>
            <div className="h-48 bg-gray-200 rounded-lg">
              {/* Embed map here */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-200 pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            © 2024 Pompitas Moda Infantil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}