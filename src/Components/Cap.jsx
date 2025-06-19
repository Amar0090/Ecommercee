export default function CapList() {
  const caps = [
    { name: "HATS", icon: "+", img: "src/assets/Rectangle36.png" },
    { name: "POLOS", icon: "+", img: "src/assets/Rectangle36.png" },
    { name: "T-SHIRTS", icon: "−", img: "src/assets/Rectangle36.png" },
  ];

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto mt-6 space-y-4 px-2">
      {caps.map((cap, idx) => (
        <div
          key={idx}
          className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-md p-4 shadow-sm gap-4 sm:gap-0"
        >
          {/* Left Side: Image + Name */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <img
              src={cap.img}
              alt={cap.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
            />
            <span className="text-lg sm:text-xl font-semibold text-black">
              {cap.name}
            </span>
          </div>

          {/* Right Side: Icon */}
          <div className="text-black text-xl sm:text-2xl font-bold w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full">
            {cap.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
