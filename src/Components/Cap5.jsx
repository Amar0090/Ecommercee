import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const categories = [
  {
    id: 1,
    name: "POLOS",
    image: "src/assets/Rectangle36.png",
    children: [],
  },
  {
    id: 2,
    name: "POLOS",
    image: "src/assets/Rectangle36.png",
    children: [],
  },
  {
    id: 3,
    name: "T-SHIRTS",
    image: "src/assets/Rectangle36.png",
    children: [
      {
        id: 31,
        name: "BELLA & CANVES T-SHIRT",
        image: "src/assets/Rectangle36.png",
      },
    ],
  },
];

const Cap5 = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCategory = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto mt-6 space-y-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="border border-gray-200 rounded-md overflow-hidden w-full"
        >
          {/* Main Category */}
          <div
            onClick={() => toggleCategory(cat.id)}
            className="flex flex-col sm:flex-row sm:items-center justify-between px-3 py-3 cursor-pointer hover:bg-gray-50 gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded"
              />
              <span className="font-medium text-sm sm:text-base text-black">{cat.name}</span>
            </div>
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-sm self-end sm:self-auto">
              {expandedId === cat.id ? <FiMinus /> : <FiPlus />}
            </div>
          </div>

          {/* Sub-items */}
          {expandedId === cat.id && cat.children.length > 0 && (
            <div className="bg-white border-t border-gray-200 px-4 py-3 w-full space-y-2">
              {cat.children.map((child) => (
                <div
                  key={child.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-md px-3 py-2 border border-gray-200 gap-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={child.image}
                      alt={child.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded"
                    />
                    <span className="text-sm sm:text-base font-semibold text-black">
                      {child.name}
                    </span>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-sm">
                    <FiMinus />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Cap5;
