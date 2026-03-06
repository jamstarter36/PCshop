import { useCart } from './context/CartContext';

export const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(',', ''));
        return sum + price;
    }, 0);

    return (
        <div className="flex flex-col items-center mt-1 px-2">
            <div className="flex flex-col w-full max-w-2xl bg-gray-200 min-h-30">

                {/* Header */}
                <div className="bg-gray-200 px-3 pt-3 pb-2 border-b-2 border-blue-500">
                    <h2 className="font-bold gfontsecond text-gray-700">Your Cart</h2>
                </div>

                <div className="p-3">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-400 text-sm text-center py-6 italic">Your cart is empty.</p>
                    ) : (
                        <>
                            {/* Items */}
                            <ul className="w-full flex flex-col gap-1">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center bg-white border border-gray-100 shadow-sm rounded p-2 text-sm hover:border-blue-200 transition-colors duration-150">
                                        <span className="text-gray-800 font-medium truncate mr-2">{item.name}</span>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-red-500 font-bold">₱{item.price}</span>
                                            <button
                                                onClick={() => removeFromCart(index)}
                                                className="text-gray-300 hover:text-red-500 cursor-pointer transition-colors duration-150 text-xs border border-gray-200 hover:border-red-400 rounded px-1 py-0.5">
                                                ✕
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-400 text-xs mt-2 italic text-center">Please double check your items before checking out.</p>

                            {/* Total */}
                            <div className="flex justify-between mt-3 border-t border-gray-300 pt-2 font-bold text-sm">
                                <span className="text-gray-600">Total</span>
                                <span className="text-red-500 text-base">₱{total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                            </div>

                            {/* Checkout */}
                            <div className="flex items-center justify-center mt-3">
                                <button className="w-full max-w-xs bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded shadow transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
                                    Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};