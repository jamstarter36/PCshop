import { useState } from 'react';
import { laptops } from '../data/FakeDb';
import { useCart } from '../context/CartContext';

const LaptopCard = ({ laptop }) => {
    const [showSpecs, setShowSpecs] = useState(false);
    const [added, setAdded] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ name: laptop.name, price: laptop.price });
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
            <span className="text-center font-bold text-sm text-gray-800 mb-1">{laptop.name}</span>
            <button
                className="bg-orange-500 p-1 px-2 cursor-pointer hover:bg-orange-400 text-center text-xs w-full rounded-sm transition-colors duration-200"
                onClick={() => setShowSpecs(!showSpecs)}>
                <span className="text-white font-medium">{showSpecs ? '▲ Hide Specs' : '▼ View Specs'}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${showSpecs ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <div className="text-center text-xs bg-gray-50 border border-gray-200 rounded p-2 text-gray-600 leading-relaxed">{laptop.specs}</div>
            </div>
            <span className="text-red-500 font-bold mt-2 text-sm">{laptop.price}</span>
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

export const Laptop = ({ addToCart }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center mt-1">
                <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-1 pb-1 border-b-2 border-blue-500">
                    <span className="font-bold gfontsecond text-gray-700">Laptops</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 w-300 m:w-120 h-full bg-gray-200 gap-2 p-2 overflow-hidden items-start">
                    {laptops.map((laptop) => (
                        <LaptopCard key={laptop.id} laptop={laptop} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </>
    );
};