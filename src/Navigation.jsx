import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
export const Navigation=()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <nav className="bg-gray-600 text-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-xl font-bold">
                            MyLogo
                        </div>
                        <div className="hidden md:flex space-x-8">

                            <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Promo</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Build</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Hot Deals</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Contacts</Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {isOpen && (
                    <div className="md:hidden grid grid-cols-2">
                        <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
                        <Link to="/" className="hover:underline hover:text-gray-300">Promo</Link>
                        <Link to="/" className="hover:underline hover:text-gray-300">Build</Link>
                        <Link to="/" className="hover:underline hover:text-gray-300">Hot Deals</Link>
                        <Link to="/" className="hover:underline hover:text-gray-300">Contacts</Link>
                    </div>
                )}
                </div>
            </nav>
        </>
         );
};
