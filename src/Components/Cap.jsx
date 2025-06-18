export default function CapList() {
  const caps = [
    { name: "HATS", icon: "+", img: "src/assets/Rectangle 36.png" },
    { name: "POLOS", icon: "+", img: "src/assets/Rectangle 36.png" },
    { name: "T-SHIRTS", icon: "−", img: "src/assets/Rectangle 36.png" },
  ];

  return (
    <div className="w-[80%] space-y-3 px-4 mt-6 mx-auto">
      {caps.map((cap, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-white rounded-md p-4 shadow-sm"
        >
          {/* Left: Bigger Image and Text */}
          <div className="flex items-center space-x-4">
            <img
              src={cap.img}
              alt={cap.name}
              className="w-50 h-25 object-cover rounded" // और बड़ा किया w-24, h-24
            />
            <span className="text-xl font-semibold">{cap.name}</span> {/* text भी हल्का बड़ा */}
          </div>

          {/* Right: Icon with black color & border */}
          <div className="text-black text-2xl font-bold w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full">
            {cap.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
