export default function Card22() {
  const products = [
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle 36.png",
      active: true,
    },
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle 36.png",
      active: false,
    },
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle 36.png",
      active: false,
    },
  ];

  return (
    <div className="w-[80%] mx-auto space-y-3 mt-6">
      {products.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white p-4 rounded-md border border-gray-300"
        >
          {/* Left: Image + Text */}
          <div className="flex items-center space-x-5">
            <img
              src={item.img}
              alt={item.title}
              className="w-50 h-18 object-cover rounded"
            />
            <span className="text-xl font-medium text-gray-800">
              {item.title}
            </span>
          </div>

          {/* Right: Button */}
          <button
            className={`px-4 py-2 rounded shadow text-base font-medium ${
              item.active
                ? "bg-red-600 text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            Select option
          </button>
        </div>
      ))}
    </div>
  );
}
