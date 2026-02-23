// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from 'react-router-dom';
// import Logo from './images/Logo.png';
// export const Navigation=()=>{
//     const [isOpen, setIsOpen] = useState(false);
//     return(
//         <>
//             <nav className="bg-gray-600 text-white sticky top-0 z-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="text-xl font-bold">
//                            <img src={Logo} className="w-50 h-full"/>
//                         </div>
//                         <div className="hidden md:flex space-x-8">

//                             <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
//                             <Link to="/" className="hover:underline hover:text-gray-300">Promo</Link>
//                             <Link to="/" className="hover:underline hover:text-gray-300">Build</Link>
//                             <Link to="/" className="hover:underline hover:text-gray-300">Hot Deals</Link>
//                             <Link to="/" className="hover:underline hover:text-gray-300">Contacts</Link>
//                             <Link to="/" className="hover:underline hover:text-gray-300">Shop</Link>
//                         </div>
//                         <div className="md:hidden">
//                             <button onClick={() => setIsOpen(!isOpen)}>
//                             {isOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
//                 {isOpen && (
//                     <div className="md:hidden grid grid-cols-2">
//                         <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
//                         <Link to="/" className="hover:underline hover:text-gray-300">Promo</Link>
//                         <Link to="/" className="hover:underline hover:text-gray-300">Build</Link>
//                         <Link to="/" className="hover:underline hover:text-gray-300">Hot Deals</Link>
//                         <Link to="/" className="hover:underline hover:text-gray-300">Contacts</Link>
//                         <Link to="/" className="hover:underline hover:text-gray-300">Shop</Link>
//                     </div>
//                 )}
//                 </div>
//             </nav>
//         </>
//          );
// };


import { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png';
import { useCart } from './context/CartContext';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const { cartItems } = useCart();

    return (
        <>
            <nav className="bg-gray-600 text-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-xl font-bold">
                            <img src={Logo} className="w-50 h-full" />
                        </div>
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Promo</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Build</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Hot Deals</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300">Contacts</Link>
                            
                            {/* Cart icon */}
                            <Link to="/cart" className="relative hover:text-gray-300">
                                <ShoppingCart size={22} />
                                {cartItems.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    {isOpen && (
                        <div className="grid grid-cols-2 px-4 pb-2">
                            <Link to="/" className="hover:underline hover:text-gray-300 py-1">Home</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300 py-1">Promo</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300 py-1">Build</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300 py-1">Hot Deals</Link>
                            <Link to="/" className="hover:underline hover:text-gray-300 py-1">Contacts</Link>
                            <Link to="/laptop" onClick={() => setIsOpen(false)} className="hover:underline hover:text-gray-300 py-1">Laptops</Link>
                            <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:underline hover:text-gray-300 py-1">Cart ({cartItems.length})</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};
