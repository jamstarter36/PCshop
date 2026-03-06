import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motherboards, cpu, gpu, ram, ssd, hdd, psu, casing, cooler, fan } from "../data/FakeDb";

const steps = [
    { key: "cpu",         label: "CPU",         data: cpu,          optional: false },
    { key: "motherboard", label: "Motherboard",  data: motherboards, optional: false },
    { key: "gpu",         label: "GPU",          data: gpu,          optional: false },
    { key: "ram",         label: "RAM",          data: ram,          optional: false },
    { key: "ssd",         label: "SSD",          data: ssd,          optional: false },
    { key: "hdd",         label: "HDD",          data: hdd,          optional: true  },
    { key: "psu",         label: "PSU",          data: psu,          optional: false },
    { key: "casing",      label: "Casing",       data: casing,       optional: false },
    { key: "cooler",      label: "Cooler",       data: cooler,       optional: true  },
    { key: "fan",         label: "Fan",          data: fan,          optional: true  },
];

const PartCard = ({ item, selected, onSelect }) => {
    const [showSpecs, setShowSpecs] = useState(false);

    return (
        <div
            onClick={() => onSelect(item)}
            className={`bg-white shadow-md rounded flex flex-col items-center p-2 relative border-2 cursor-pointer transition-all duration-200
                ${selected ? 'border-blue-500 shadow-lg' : 'border-gray-100 hover:border-blue-300 hover:shadow-lg'}`}>

            {selected && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">✓</div>
            )}

            <span className="text-center font-bold text-sm text-gray-800 mb-1 pr-4">{item.name}</span>
            <button
                className="bg-orange-500 p-1 px-2 cursor-pointer hover:bg-orange-400 text-center text-xs w-full rounded-sm transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); setShowSpecs(!showSpecs); }}>
                <span className="text-white font-medium">{showSpecs ? '▲ Hide Specs' : '▼ View Specs'}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${showSpecs ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <div className="text-center text-xs bg-gray-50 border border-gray-200 rounded p-2 text-gray-600 leading-relaxed">{item.specs}</div>
            </div>
            <span className="text-red-500 font-bold mt-2 text-sm">₱{item.price}</span>
            <button
                onClick={(e) => { e.stopPropagation(); onSelect(item); }}
                className={`w-full rounded py-1 px-2 text-white text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105 shadow mt-2
                    ${selected ? 'bg-blue-500 hover:bg-blue-400' : 'bg-gray-400 hover:bg-gray-500'}`}>
                {selected ? '✓ Selected' : 'Select'}
            </button>
        </div>
    );
};

const Summary = ({ selections, onAddAllToCart, onBack }) => {
    const [added, setAdded] = useState(false);

    const total = Object.values(selections).reduce((sum, item) => {
        return sum + parseFloat(item.price.replace(',', ''));
    }, 0);

    const handleAddAll = () => {
        onAddAllToCart();
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <>
            <div className="flex flex-row justify-center items-center mt-1">
                <div className="w-full max-w-5xl px-2 bg-gray-200 py-1 border-b-2 border-blue-500">
                    <span className="font-bold gfontsecond text-gray-700">Your Build Summary</span>
                </div>
            </div>

            <div className="flex justify-center mt-2 px-2">
                <div className="w-full max-w-5xl bg-gray-200 p-3">
                    <button
                        onClick={onBack}
                        className="text-xs text-gray-500 hover:text-blue-500 mb-3 cursor-pointer transition-colors duration-150">
                        ← Edit Build
                    </button>

                    <div className="bg-white rounded border border-gray-100 shadow-md overflow-hidden mb-4">
                        {Object.entries(selections).map(([key, item], i) => {
                            const step = steps.find(s => s.key === key);
                            return (
                                <div key={key} className={`flex text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-0`}>
                                    <div className="w-28 shrink-0 font-bold text-gray-500 px-3 py-2 border-r border-gray-100 text-xs uppercase tracking-wide">
                                        {step?.label}
                                    </div>
                                    <div className="flex-1 px-3 py-2 text-gray-700 text-xs">{item.name}</div>
                                    <div className="px-3 py-2 text-red-500 font-bold text-xs shrink-0">₱{item.price}</div>
                                </div>
                            );
                        })}
                        <div className="flex justify-between px-3 py-2 border-t-2 border-gray-300 font-bold text-sm bg-gray-50">
                            <span className="text-gray-700">Total</span>
                            <span className="text-red-500">₱{total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-xs italic text-center mb-3">Please double check your build before adding to cart.</p>

                    <div className="flex justify-center">
                        <button
                            onClick={handleAddAll}
                            className={`w-full max-w-xs rounded py-2 px-4 text-white text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105 shadow
                                ${added ? 'bg-green-500 hover:bg-green-400' : 'bg-blue-500 hover:bg-blue-400'}`}>
                            {added ? '✓ Added to Cart!' : '+ Add All to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export const BuildNow = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({});
    const [showSummary, setShowSummary] = useState(false);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const step = steps[currentStep];
    const selectedItem = selections[step?.key];

    const handleSelect = (item) => {
        setSelections(prev => ({ ...prev, [step.key]: item }));
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
        else setShowSummary(true);
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(c => c - 1);
        else navigate('/');
    };

    const handleSkip = () => {
        if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
        else setShowSummary(true);
    };

    const handleAddAllToCart = () => {
        Object.values(selections).forEach(item => {
            addToCart({ name: item.name, price: item.price });
        });
    };

    if (showSummary) {
        return (
            <Summary
                selections={selections}
                onAddAllToCart={handleAddAllToCart}
                onBack={() => setShowSummary(false)}
            />
        );
    }

    const progress = Math.round((currentStep / steps.length) * 100);

    return (
        <>
            {/* Header */}
            <div className="flex flex-row justify-center items-center mt-1">
                <div className="w-full max-w-5xl px-2 bg-gray-200 py-1 border-b-2 border-blue-500">
                    <span className="font-bold gfontsecond text-gray-700">Build Your PC</span>
                </div>
            </div>

            <div className="flex justify-center px-2 mt-2">
                <div className="w-full max-w-5xl bg-gray-200 p-3">

                    {/* Back */}
                    <button
                        onClick={handleBack}
                        className="text-xs text-gray-500 hover:text-blue-500 mb-3 cursor-pointer transition-colors duration-150">
                        ← {currentStep === 0 ? 'Back to Home' : 'Previous'}
                    </button>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-1">
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-xs text-gray-400 mb-4">Step {currentStep + 1} of {steps.length}</p>

                    {/* Step indicators */}
                    <div className="flex gap-1 overflow-x-auto pb-2 mb-4">
                        {steps.map((s, i) => (
                            <div
                                key={s.key}
                                className={`flex-shrink-0 text-xs px-2 py-1 rounded font-semibold border transition-colors duration-200
                                    ${i === currentStep
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : selections[s.key]
                                        ? 'bg-green-500 text-white border-green-500'
                                        : 'bg-white text-gray-400 border-gray-200'}`}>
                                {selections[s.key] ? '✓' : i + 1} {s.label}
                            </div>
                        ))}
                    </div>

                    {/* Step title */}
                    <div className="flex items-center gap-2 mb-3">
                        <h2 className="font-bold text-gray-700 text-base">
                            Pick your <span className="text-blue-500">{step.label}</span>
                        </h2>
                        {step.optional && (
                            <span className="text-xs bg-gray-300 text-gray-500 px-2 py-0.5 rounded-full">Optional</span>
                        )}
                    </div>

                    {/* Parts grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                        {step.data.map(item => (
                            <PartCard
                                key={item.id}
                                item={item}
                                selected={selectedItem?.id === item.id}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                        {step.optional ? (
                            <button
                                onClick={handleSkip}
                                className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer underline transition-colors duration-150">
                                Skip this step
                            </button>
                        ) : <div />}

                        <button
                            onClick={handleNext}
                            disabled={!selectedItem && !step.optional}
                            className={`rounded py-2 px-6 text-white text-sm font-semibold transition-all duration-200 shadow
                                ${selectedItem || step.optional
                                    ? 'bg-blue-500 hover:bg-blue-400 hover:scale-105 cursor-pointer'
                                    : 'bg-gray-300 cursor-not-allowed'}`}>
                            {currentStep === steps.length - 1 ? 'Review Build →' : 'Next →'}
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
};