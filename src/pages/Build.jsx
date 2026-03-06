import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { buildsuggestion } from '../data/FakeDb';
import Wanderer from '../images/Suggestion/wanderer.png';
import Midway from '../images/Suggestion/midway.png';
import Warp from '../images/Suggestion/warp.png';
import Zenith from '../images/Suggestion/zenith.png';

const images = {
    Wanderer,
    Midway,
    Warp,
    Zenith,
};

const accentColors = {
    Wanderer: "border-red-500",
    Midway:   "border-amber-500",
    Warp:     "border-purple-500",
    Zenith:   "border-blue-500",
};

const badgeColors = {
    Wanderer: "bg-red-600",
    Midway:   "bg-amber-600",
    Warp:     "bg-purple-600",
    Zenith:   "bg-blue-600",
};

const specs = [
    { key: "cpu",         label: "CPU" },
    { key: "motherboard", label: "Motherboard" },
    { key: "gpu",         label: "GPU" },
    { key: "ram",         label: "RAM" },
    { key: "ssd",         label: "SSD" },
    { key: "psu",         label: "PSU" },
    { key: "cooler",      label: "Cooler" },
    { key: "case",        label: "Case" },
];

export const Build = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const build = buildsuggestion.find(b => b.name.toLowerCase() === name);

    const handleAddToCart = () => {
        addToCart({ name: `${build.name} Build`, price: build.price });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (!build) return (
        <div className="flex justify-center mt-4 px-2">
            <div className="w-full max-w-5xl bg-gray-200 p-4">
                <p className="text-gray-500 text-sm">Build not found.</p>
                <button onClick={() => navigate('/')} className="text-xs text-blue-500 mt-2 cursor-pointer">← Back to Home</button>
            </div>
        </div>
    );

    return (
        <>
            {/* Header */}
            <div className="flex flex-row justify-center items-center mt-1">
                <div className={`w-full max-w-5xl px-2 bg-gray-200 py-1 border-b-2 ${accentColors[build.name]}`}>
                    <span className="font-bold gfontsecond text-gray-700">Build Suggestion</span>
                </div>
            </div>

            <div className="flex justify-center mt-2 px-2">
                <div className="w-full max-w-5xl bg-gray-200 p-3">

                    {/* Back button */}
                    <button
                        onClick={() => navigate('/')}
                        className="text-xs text-gray-500 hover:text-blue-500 mb-3 cursor-pointer transition-colors duration-150">
                        ← Back to Build Suggestions
                    </button>

                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* Image + name */}
                        <div className={`bg-white rounded border-2 ${accentColors[build.name]} shadow-md flex flex-col items-center justify-center p-4 gap-2 sm:w-48 shrink-0`}>
                            <img src={images[build.name]} alt={build.name} className="w-32" />
                            <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${badgeColors[build.name]}`}>
                                {build.name}
                            </span>
                            <span className="text-red-500 font-bold text-sm mt-1">₱{build.price}</span>
                            <button
                                onClick={handleAddToCart}
                                className={`w-full rounded py-1 px-2 text-white text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105 shadow mt-1 ${added ? 'bg-green-500 hover:bg-green-400' : 'bg-blue-500 hover:bg-blue-400'}`}>
                                {added ? '✓ Added!' : '+ Add to cart'}
                            </button>
                        </div>

                        {/* Specs table */}
                        <div className="flex-1 bg-white rounded border border-gray-100 shadow-md overflow-hidden">
                            {specs.map(({ key, label }, i) => {
                                if (!build[key] || build[key].trim() === "") return null;
                                return (
                                    <div
                                        key={key}
                                        className={`flex text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-0`}>
                                        <div className="w-28 shrink-0 font-bold text-gray-500 px-3 py-2 border-r border-gray-100 text-xs uppercase tracking-wide">
                                            {label}
                                        </div>
                                        <div className="px-3 py-2 text-gray-700 text-xs leading-relaxed">
                                            {build[key]}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};