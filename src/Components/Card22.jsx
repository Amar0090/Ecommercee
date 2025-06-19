export default function Card22() {
  const products = [
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle36.png",
      active: true,
    },
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle36.png",
      active: false,
    },
    {
      title: "BELLA & CANVES T-SHIRT",
      img: "src/assets/Rectangle36.png",
      active: false,
    },
  ];

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto space-y-4 mt-6">
      {products.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-md border border-gray-300 gap-3"
        >
          {/* Left: Image + Text */}
          <div className="flex items-center gap-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 sm:w-24 sm:h-20 object-cover rounded"
            />
            <span className="text-base sm:text-lg font-medium text-gray-800">
              {item.title}
            </span>
          </div>

          {/* Right: Button */}
          <button
            className={`px-4 py-2 rounded shadow text-sm sm:text-base font-medium transition-all duration-200 ${
              item.active
                ? "bg-red-600 text-white"
                : "bg-white text-black border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Select option
          </button>
        </div>
      ))}
    </div>
  );
}
