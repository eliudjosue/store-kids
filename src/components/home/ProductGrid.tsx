import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

const tabs = ['Populares', 'Nuevos', 'Los Más Vendidos'];

const products = [
  {
    id: 1,
    name: 'Vestido Flores',
    description: 'Vestido de algodón con estampado floral',
    price: 62.00,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7',
  },
  {
    id: 2,
    name: 'Conjunto Marinero',
    description: 'Conjunto de dos piezas estilo marinero',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8',
  },
  {
    id: 3,
    name: 'Vestido Ceremonia',
    description: 'Vestido elegante para ceremonias',
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4',
  },
  {
    id: 4,
    name: 'Conjunto Casual',
    description: 'Conjunto informal para el día a día',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea',
  },
];

export function ProductGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-sm sm:text-base transition-colors ${
                  activeTab === index
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}