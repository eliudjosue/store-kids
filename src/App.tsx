import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { ProductGrid } from './components/home/ProductGrid';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;