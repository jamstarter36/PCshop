import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { monitor, mouse, keyboard, headset, camera } from "../data/FakeDb";

const categories = [
  { label: "Monitor",  data: monitor,  img: null },
  { label: "Mouse",    data: mouse,    img: null },
  { label: "Keyboard", data: keyboard, img: null },
  { label: "Headset",  data: headset,  img: null },
  { label: "Camera",   data: camera,   img: null },
];

const PeripheralCard = ({ item }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name: item.name, price: item.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white shadow-md rounded flex flex-col items-center p-2 relative border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-200">
      {added && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded shadow z-10 whitespace-nowrap animate-bounce">
          Item added to cart!
        </div>
      )}
      <span className="text-center font-bold text-sm text-gray-800 mb-1">{item.name}</span>
      <button
        className="bg-orange-500 p-1 px-2 cursor-pointer hover:bg-orange-400 text-center text-xs w-full rounded-sm transition-colors duration-200"
        onClick={() => setShowSpecs(!showSpecs)}>
        <span className="text-white font-medium">{showSpecs ? '▲ Hide Specs' : '▼ View Specs'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${showSpecs ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
        <div className="text-center text-xs bg-gray-50 border border-gray-200 rounded p-2 text-gray-600 leading-relaxed">{item.specs}</div>
      </div>
      <span className="text-red-500 font-bold mt-2 text-sm">₱{item.price}</span>
      <div className="flex mt-auto gap-1 mt-2 w-full">
        <button
          className="w-full rounded bg-blue-500 py-1 px-2 text-white text-xs font-semibold cursor-pointer hover:bg-blue-400 transition-all duration-200 hover:scale-105 shadow"
          onClick={handleAddToCart}>
          + Add to cart
        </button>
      </div>
    </div>
  );
};

export const Peripherals = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = categories[activeIdx];

  return (
    <>
      {/* Header */}
      <div className="flex flex-row justify-center items-center mt-1">
        <div className="w-full max-w-5xl px-2 bg-gray-200 py-1 border-b-2 border-blue-500">
          <span className="font-bold gfontsecond text-gray-700">Peripherals</span>
        </div>
      </div>

      {/* Category Swiper */}
      <div className="flex justify-center w-full">
        <div className="bg-gray-200 w-full max-w-5xl overflow-hidden py-2 px-2">
          <Swiper slidesPerView="auto" spaceBetween={8} className="w-full">
            {categories.map((cat, i) => (
              <SwiperSlide key={cat.label} style={{ width: 'clamp(75px, 10vw, 115px)' }}>
                <div
                  onClick={() => setActiveIdx(i)}
                  className={`flex flex-col cursor-pointer rounded border-2 overflow-hidden transition-all duration-200
                    ${i === activeIdx ? 'border-blue-500 shadow-md' : 'border-gray-200 bg-white hover:border-blue-300'}`}
                  style={{ height: 'clamp(75px, 10vw, 115px)' }}>

                  {/* Image area */}
                  <div className={`w-full flex-1 flex items-center justify-center ${i === activeIdx ? 'bg-blue-50' : 'bg-gray-100'}`}>
                    {cat.img
                      ? <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
                      : <span className="text-gray-300" style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}>📦</span>
                    }
                  </div>

                  {/* Label */}
                  <div className={`w-full text-center font-bold truncate py-1 px-1
                    ${i === activeIdx ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                    style={{ fontSize: 'clamp(9px, 1.5vw, 12px)' }}>
                    {cat.label}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Parts Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full max-w-5xl bg-gray-200 gap-2 p-2 items-start">
          {active.data.map((item) => (
            <PeripheralCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};