import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Soldes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") 
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 5)); 
      })
      .catch((error) => console.error("Erreur ci récupération des produits:", error));
  }, []);

  return (
    <div className="w-full bg-[#F3F4F6] py-8">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">EN SOLDES</h2>
          <Link
            to="/soldes"
            className="text-gray-800 underline hover:text-gray-600"
          >
            VOIR TOUT
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-auto"
            >
              <img
                src={product.image} 
                alt={product.title} 
                className="w-full rounded-lg mb-4 object-contain h-[150px]"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-2 line-clamp-2">
                {product.title || "Produit sans titre"} 
              </h3>
              <p className="text-[#F97316] font-semibold mb-4">
                {product.price ? `francs ${product.price}` : "Prix indisponible"}
              </p>
              <Link
                to={`/produit/${product.id}`} 
                className="block text-center bg-gray-800 text-white py-2 px-4 rounded hover:bg-[#F97316] transition-colors"
              >
                Voir produit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soldes;
