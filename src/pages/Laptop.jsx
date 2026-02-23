import { useState } from 'react';
import { laptops } from '../data/FakeDb'
import { useCart } from '../context/CartContext';

const LaptopCard = ({ laptop }) => {
    const [showSpecs, setShowSpecs] = useState(false);
    const { addToCart } = useCart();

    return (
        <div className="bg-white shadow-sm flex flex-col items-center p-1">
            <span className="text-center">{laptop.name}</span>
            <button
                className="bg-orange-500 p-1 px-2 cursor-pointer hover:bg-orange-400 text-center text-sm w-full"
                onClick={() => setShowSpecs(!showSpecs)}>
                {showSpecs ? 'Hide Specs' : 'View Specs'}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${showSpecs ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <div className="text-center text-sm bg-gray-100 rounded p-2">{laptop.specs}</div>
            </div>
            <span className="text-red-500">{laptop.price}</span>
            <div className="flex mt-auto gap-1 mt-2">
                <button
                    className="bg-blue-500 p-1 cursor-pointer hover:bg-blue-400 transition-transform duration-300 ease-in-out hover:scale-110"
                    onClick={() => addToCart({ name: laptop.name, price: laptop.price })}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export const Laptop = ({ addToCart }) => {
    return (
        <>
            <div className="flex flex-row justify-center items-center mt-1">
                <div className="w-300 m:w-120 h-full bg-gray-200 pl-2 pt-1">
                    <span className="font-bold gfontsecond">Laptops</span>
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