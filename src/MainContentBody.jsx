import { BuildSuggestion } from "./BuildSuggestion";
import { Category } from "./Category";
import { Deals } from "./Deals";
import { PcBuilder } from "./PcBuilder";
import { Promo } from "./Promo";
import { Laptop } from "./pages/Laptop";
import { PcParts } from "./pages/PcParts";
import { Peripherals } from "./pages/Peripherals"; 
import { Others } from "./pages/Others";
import { Build } from "./pages/Build";
import { BuildNow } from "./pages/BuildNow";
import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './HeroSection'
import { Footer } from "./Footer";
import { Cart } from "./Cart";

const DefaultContent = () => {
  return (
    <>
        <HeroSection/>
        <div className="flex flex-col">
            <Promo/>
            <Category/>
            <BuildSuggestion/>
            <div id="build-your-pc">
                <PcBuilder/>
            </div>
            <div id="hot-deals">
                <Deals/>
            </div>
        </div>
        <div id="footer">
            <Footer />
        </div>
    </>
  );
};

export const MainContentBody = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<DefaultContent />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/pcparts" element={<PcParts />} />
            <Route path="/peripherals" element={<Peripherals />} />
            <Route path="/others" element={<Others />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/build/:name" element={<Build />} />
            <Route path="/buildnow" element={<BuildNow />} />
        </Routes>
        </>
    );
};