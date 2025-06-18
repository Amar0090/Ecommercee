import React from "react";

const products = [
  {
    id: 1,
    image:
      "src/assets/Rectangle 17.png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
    showButton: true,
  },
  {
    id: 2,
    image:
      "src/assets/Rectangle 17 (2).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 3,
    image:
      "src/assets/Rectangle 17 (4).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 4,
    image:
      "src/assets/Rectangle 17 (5).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 5,
    image:
      "src/assets/Rectangle 17 (6).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 6,
    image:
      "src/assets/Rectangle 17.png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 7,
    image:
      "src/assets/Rectangle 17 (7).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
  {
    id: 8,
    image:
      "src/assets/Rectangle 17 (2).png",
    brand: "Gap",
    name: "Men GAP Winter Cap",
    price: "$60.00",
    oldPrice: "$75.00",
  },
];

const Card3 = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Best Seller
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div key={item.id} className="text-center">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded"
              />
              {item.showButton && (
                <button className="src/assets/Rectangle 17 (2).png">
                  Add to Cart
                </button>
              )}
            </div>
            <div className="mt-3 text-left">
              <p className="font-bold text-sm">{item.brand}</p>
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm font-semibold mt-1">
                <span>{item.price}</span>{" "}
                <span className="line-through text-gray-400 ml-1">
                  {item.oldPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card3;
