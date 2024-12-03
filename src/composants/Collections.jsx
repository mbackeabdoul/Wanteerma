import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Collections = () => {
  const [produits, setProduits] = useState([]);

  const fetchProduits = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProduits(response.data); 
    } catch (error) {
      console.error('Erreur waxtu recuperatios bi :', error);
    }
  };

  useEffect(() => {
    fetchProduits();
  }, []);

  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {produits.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <span className="text-[#F97316] text-lg font-medium">MODE ENFANTS</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  Offre limitée<br />
                  Jusqu'à 30%
                </h2>
                <Link 
                  to="/enfants" 
                  className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-[#F97316] transition-colors"
                >
                  Achetez maintenant
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={produits[0]?.image} 
                  alt="Mode enfants" 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          )}

          {produits.length > 1 && (
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <span className="text-[#F97316] text-lg font-medium">COLLECTIONS HOMME</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                  Nouvelles Arrivées<br />
                  Jusqu'à 50%
                </h2>
                <Link 
                  to="/hommes" 
                  className="inline-block px-6 py-3 bg-gray-800 text-white rounded hover:bg-[#F97316] transition-colors"
                >
                  Achetez maintenant
                </Link>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={produits[1]?.image} 
                  alt="Collection homme" 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
