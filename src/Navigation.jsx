import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from './images/logo.png';
import { useCart } from './context/CartContext';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const scrollTo = (id) => {
        setIsOpen(false);
        // If not on home, navigate home first then scroll
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    };

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
                            <button onClick={() => scrollTo('hot-deals')} className="hover:underline hover:text-gray-300 cursor-pointer">Promo</button>
                            <button onClick={() => scrollTo('build-your-pc')} className="hover:underline hover:text-gray-300 cursor-pointer">Build</button>
                            <button onClick={() => scrollTo('footer')} className="hover:underline hover:text-gray-300 cursor-pointer">Contacts</button>
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

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="grid grid-cols-2 px-4 pb-2">
                        <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline hover:text-gray-300 py-1">Home</Link>
                        <button onClick={() => scrollTo('hot-deals')} className="hover:underline hover:text-gray-300 py-1 text-left">Promo</button>
                        <button onClick={() => scrollTo('build-your-pc')} className="hover:underline hover:text-gray-300 py-1 text-left">Build</button>
                        <button onClick={() => scrollTo('hot-deals')} className="hover:underline hover:text-gray-300 py-1 text-left">Hot Deals</button>
                        <button onClick={() => scrollTo('footer')} className="hover:underline hover:text-gray-300 py-1 text-left">Contacts</button>
                        <Link to="/laptop" onClick={() => setIsOpen(false)} className="hover:underline hover:text-gray-300 py-1">Laptops</Link>
                        <Link to="/cart" onClick={() => setIsOpen(false)} className="hover:underline hover:text-gray-300 py-1">Cart ({cartItems.length})</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};