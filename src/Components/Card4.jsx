import React from "react";

const Card4 = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <img
          src="src/assets/Young woman shopping in an online store (2).svg"
          alt="Illustration"
          className="mx-auto mb-8 w-56 h-auto"
        />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          DIDN’T FIND EXACTLY WHAT YOU’RE LOOKING FOR?
        </h2>
        <p className="text-gray-700 mb-6">
          No worries — our website features only our most popular products. For a wider selection,
          feel free to browse our full catalog with hundreds of garment options by visiting our sister site.
          You’re sure to find the perfect style to fit your needs!
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded">
          Shop Page
        </button>
      </div>
    </div>
  );
};

export default Card4;
