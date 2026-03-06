import { useState } from "react";
import { useCart } from "./context/CartContext";
import { promo } from "./data/FakeDb";

const promoColors = [
    { bg: "bg-red-600",   hover: "hover:bg-red-500",   border: "border-red-500"   },
    { bg: "bg-amber-600", hover: "hover:bg-amber-500", border: "border-amber-500" },
    { bg: "bg-blue-600",  hover: "hover:bg-blue-500",  border: "border-blue-500"  },
];

export const Deals = () => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(null);

    const handleAddToCart = (item) => {
        addToCart({ name: `${item.name} Bundle`, price: item.price });
        setAdded(item.id);
        setTimeout(() => setAdded(null), 2000);
    };

    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-5 pb-1 border-b-2 border-blue-500">
                    <span className="font-bold gfontsecond text-gray-700">Hot Deals</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row w-300 m:w-120 h-full bg-gray-200 p-2">
                    <div className="grid grid-cols-3 w-full bg-gray-200 gap-2">
                        {promo.map((item, i) => {
                            const color = promoColors[i % promoColors.length];
                            const isAdded = added === item.id;
                            const items = [item.item1, item.item2, item.item3].filter(v => v && v.trim() !== "");

                            return (
                                <div key={item.id} className={`bg-white rounded shadow-md border-2 ${isAdded ? 'border-green-500' : color.border} overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg`}>

                                    {/* Header */}
                                    <div className={`${color.bg} px-3 py-2`}>
                                        <span className="text-white font-bold text-sm">{item.name}</span>
                                    </div>

                                    {/* Items */}
                                    <div className="px-3 py-2 flex-1">
                                        <ul className="flex flex-col gap-1">
                                            {items.map((it, idx) => (
                                                <li key={idx} className="flex items-start gap-1 text-xs text-gray-600">
                                                    <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                                                    <span>{it}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer */}
                                    <div className="px-3 pb-3 flex items-center justify-between mt-1">
                                        <span className="text-red-500 font-bold text-sm">₱{item.price}</span>
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className={`rounded text-white text-xs font-semibold px-2 py-1 cursor-pointer transition-all duration-200 hover:scale-105 shadow
                                                ${isAdded ? 'bg-green-500 hover:bg-green-400' : `${color.bg} ${color.hover}`}`}>
                                            {isAdded ? '✓ Added!' : '+ Add to cart'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};