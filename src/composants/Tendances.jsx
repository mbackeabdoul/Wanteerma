import React, { useState, useEffect } from 'react';

const DernieresTendances = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1') 
      .then(response => response.json())
      .then(data => {
        setProduct(data); 
      })
      .catch(error => console.error('Erreur de récupération des données:', error));
  }, []);

  // Vérifie ndax le produit est disponible
  if (!product) {
    return <div>Chargement...</div>; // Afficher benn message de chargement bu nekkee données ne sont pas encore disponibles
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex w-[1140px]  shadow-lg flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-white p-6 flex items-center justify-center">
          <img
            src={product.image} 
            alt={product.title} 
            className="max-h-[400px] object-contain"
          />
        </div>

        <div className="w-full sm:w-1/2 bg-[#eee8aa] p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {product.title} 
          </h2>
          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
          <button className="bg-gray-900 text-white px-6 py-2 w-fit hover:bg-[#F97316] transition-colors">
            Achetez maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default DernieresTendances;
