import React from "react";

const steps = [
  {
    number: 1,
    title: "Pick Your Items",
    image: "src/assets/Select All.png",
  },
  {
    number: 2,
    title: "Upload Artwork",
    image: "src/assets/Upload (1).png",
  },
  {
    number: 3,
    title: "Order Online",
    image: "src/assets/AliExpress (1).png",
  },
  {
    number: 4,
    title: "Art Mock Approval",
    image: "src/assets/Drawing (1).png",
  },
  {
    number: 5,
    title: "Production",
    image: "src/assets/Female Worker.png",
  },
  {
    number: 6,
    title: "Shipping",
    image: "src/assets/In Transit.png",
  },
];

const Truck = () => {
  return (
    <section className="w-full bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works ?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white shadow-md rounded-md p-6 text-center relative"
          >
            <span className="absolute top-2 right-3 text-5xl text-gray-100 font-bold">
              {step.number}
            </span>
            <img
              src={step.image}
              alt={step.title}
              className="mx-auto w-20 h-20 mb-4"
            />
            <p className="text-lg font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Truck;
