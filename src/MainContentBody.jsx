import { BuildSuggestion } from "./BuildSuggestion";
import { Category } from "./Category";
import { Deals } from "./Deals";
import { PcBuilder } from "./PcBuilder";
import { Promo } from "./Promo";

export const MainContentBody=()=>{
    return(
        <>
            <div className="flex flex-col">
                <Promo/>
                <Category/>
                <BuildSuggestion/>
                <PcBuilder/>
                <Deals/>
            </div>
        </>
    );
};