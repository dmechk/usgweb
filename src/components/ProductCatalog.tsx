import React, { useState } from 'react';
import { Language, SaccoProduct } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { SACCO_INFO } from '../data/saccoData';

interface ProductCatalogProps {
  currentLang: Language;
  products: SaccoProduct[];
  isAdmin: boolean;
  onOpenAdminConsole: () => void;
  onSelectProductForLoan: (product: SaccoProduct) => void;
  onSelectProductForAccount: (product: SaccoProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currentLang,
  products,
  isAdmin,
  onOpenAdminConsole,
  onSelectProductForLoan,
  onSelectProductForAccount,
}) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="products" className="bg-slate-50 min-h-screen">
      {/* Page Title Bar */}
      <div className="bg-[#1a3c34] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            {t.products.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        {/* Placeholder Message */}
        <div className="text-center mb-16">
          <p className="text-lg text-slate-600 font-medium">
            Products and services will be listed here soon.
          </p>
        </div>

      </div>
    </section>
  );
};

