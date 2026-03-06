import { useNavigate } from "react-router-dom";

export const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 mt-2 text-gray-400 text-xs">

            {/* Main Footer Content */}
            <div className="flex justify-center">
                <div className="w-full max-w-5xl px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">

                    {/* Store Info */}
                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-white font-bold text-sm mb-2 gfontsecond">⚙ Jamstarterpc</h3>
                        <p className="leading-relaxed text-gray-500">
                            Your one-stop shop for PC parts, laptops, peripherals, and custom builds in Cebu City.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3 mt-3">
                            <a href="#" className="hover:text-blue-400 transition-colors cursor-pointer">Facebook</a>
                            <a href="#" className="hover:text-pink-400 transition-colors cursor-pointer">Instagram</a>
                            <a href="#" className="hover:text-red-400 transition-colors cursor-pointer">TikTok</a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-2">Navigation</h3>
                        <ul className="flex flex-col gap-1">
                            {[
                                { label: "Home",        path: "/" },
                                { label: "Laptops",     path: "/laptop" },
                                { label: "PC Parts",    path: "/pcparts" },
                                { label: "Peripherals", path: "/peripherals" },
                                { label: "Others",      path: "/others" },
                                { label: "Cart",        path: "/cart" },
                            ].map(link => (
                                <li key={link.path}>
                                    <span
                                        onClick={() => navigate(link.path)}
                                        className="hover:text-white transition-colors cursor-pointer">
                                        {link.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-2">Categories</h3>
                        <ul className="flex flex-col gap-1">
                            {["Motherboards", "CPU", "GPU", "RAM", "SSD", "HDD", "PSU", "Casing", "Cooler", "Fan"].map(cat => (
                                <li key={cat}>
                                    <span
                                        onClick={() => navigate("/pcparts")}
                                        className="hover:text-white transition-colors cursor-pointer">
                                        {cat}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-2">Contact Us</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-start gap-1">
                                <span className="shrink-0">📍</span>
                                <span>123 Tech Street, Cebu City, Philippines</span>
                            </li>
                            <li className="flex items-start gap-1">
                                <span className="shrink-0">📞</span>
                                <span>+63 912 345 6789</span>
                            </li>
                            <li className="flex items-start gap-1">
                                <span className="shrink-0">✉️</span>
                                <span>support@jamstarterpc.ph</span>
                            </li>
                            <li className="flex items-start gap-1 mt-1">
                                <span className="shrink-0">🕐</span>
                                <span>Mon – Sat: 9:00 AM – 7:00 PM<br />Sun: 10:00 AM – 5:00 PM</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-1">
                        <span className="text-gray-600">© 2025 Jamstarterpc. All rights reserved.</span>
                        <span className="text-gray-600">Made with ❤️ in Cebu</span>
                    </div>
                </div>
            </div>

        </div>
    );
};