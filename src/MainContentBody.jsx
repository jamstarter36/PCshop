import { BuildSuggestion } from "./BuildSuggestion";
import { Category } from "./Category";
import { Deals } from "./Deals";
import { PcBuilder } from "./PcBuilder";
import { Promo } from "./Promo";
import { Laptop } from "./pages/Laptop";
import { PcParts } from "./pages/PcParts";
import { Peripherals } from "./pages/Peripherals"; 
import { Others } from "./pages/Others";
import { Routes, Route } from 'react-router-dom';
import { HeroSection } from './HeroSection'
import { Footer } from "./Footer";

const DefaultContent = () => {
  return (
    <>
        <HeroSection/> 
        <div className="flex flex-col">
            <Promo/>
            <Category/>
            <BuildSuggestion/>
            <PcBuilder/>
            <Deals/>
        </div>
        <Footer />
    </>
  );
};
export const MainContentBody=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<DefaultContent />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/pcparts" element={<PcParts />} />
            <Route path="/peripherals" element={<Peripherals />}/>
            <Route path="/others" element={<Others />}/>
        </Routes>
        </>
    );
};

