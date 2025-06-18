export default function ProductCards() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 p-4 bg-white">
      {/* CARD START */}
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="w-[300px] bg-white p-2 shadow-md rounded-md"
        >
          <img
            src="src/assets/Rectangle 17.png"
            alt="Product"
            className="w-full h-60 object-cover"
          />

          <div className="mt-2 text-sm text-black">
            <p className="font-semibold">Colors :</p>
            <div className="flex space-x-2 mt-1">
              <span className="w-4 h-4 bg-red-600 rounded-full" />
              <span className="w-4 h-4 bg-green-600 rounded-full" />
              <span className="w-4 h-4 bg-cyan-400 rounded-full" />
              <span className="w-4 h-4 bg-pink-500 rounded-full" />
            </div>

            <p className="mt-2 font-semibold">Sizes :</p>
            <div className="flex gap-2 mt-1">
              <span>XS</span>
              <span>S</span>
              <span>M</span>
              <span>L</span>
            </div>

            <div className="grid grid-cols-6 gap-[1px] mt-3 text-center text-xs">
              {["19", "24", "48", "96", "144", "285", "20", "18", "17", "16", "15", "14"].map(
                (val, i) => (
                  <div key={i} className="border p-1">
                    {val}
                  </div>
                )
              )}
            </div>

            <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-sm">
              Select Options
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
