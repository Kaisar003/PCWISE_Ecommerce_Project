"use client"
import React from 'react';
import { usePathname } from "next/navigation"

export default function CartNavbar() {
    const pathname = usePathname();

    const steps = [
        { label: "Delivery and payment", path: "/shopping-cart" },
        { label: "Personal details", path: "/shopping-cart/details" },
        { label: "Summary", path: "/shopping-cart/summary" }
    ];

    const getStatus = (stepPath, index) => {
        const currentStepIndex = steps.findIndex(step => step.path === pathname);
        if (index < currentStepIndex) return 'completed';
        if (pathname === stepPath) return 'current';
        return 'upcoming';
    };

    const CheckIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
            <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
    );

    return (
        <nav className="header top-0 bg-white border border-gray-200 shadow-md flex flex-row items-center justify-between px-8 py-4">
            {steps.map((step, index) => (
                <React.Fragment key={step.path}>
                    <div className="flex flex-row items-center">
                        <div className={`flex justify-center items-center w-14 h-14 border rounded-full text-center z-10 transition-all ease-in-out duration-300 
                        ${getStatus(step.path, index) === 'current' ? 'bg-blue-card text-white' :
                                getStatus(step.path, index) === 'completed' ? 'bg-green-600' : 'bg-gray-300 text-black'}`}>
                            {getStatus(step.path, index) === 'completed' ? (
                                <CheckIcon />
                            ) : (
                                index + 1
                            )}
                        </div>
                        <p className={`ml-2 whitespace-nowrap ${getStatus(step.path) === 'current' || getStatus(step.path) === 'completed' ? 'text-black' : 'text-gray-600'
                            }`}>
                            {step.label}
                        </p>
                    </div>
                    {index < steps.length - 1 && (
                        <hr className="w-full h-1 mx-10 bg-blue-card" />
                    )}
                </React.Fragment>
            ))}
        </nav>
    )
}

{/* <nav className="header top-0 bg-white border border-gray-200 shadow-md flex flex-row items-center justify-between px-8 py-4">
            <div className="flex flex-row items-center">
                <div className="bg-blue-card flex justify-center items-center text-white w-14 h-14 border rounded-full text-center opacity-75 z-10 p-0 m-0 transition-all ease-in-out duration-300">
                    1
                </div>
                <p className="ml-2 text-black whitespace-nowrap">Delivery and payment</p>
            </div>
            <hr className="w-full h-1 mx-10 bg-blue-card" />
            <div className="flex flex-row items-center">
                <div className="bg-blue-card flex justify-center items-center text-white w-14 h-14 border rounded-full text-center opacity-75 z-10 p-0 m-0 transition-all ease-in-out duration-300">
                    2
                </div>
                <p className="ml-2 text-black whitespace-nowrap">Personal details</p>
            </div>
            <hr className="w-full h-1 mx-10 bg-blue-card" />
            <div className="flex flex-row items-center">
                <div className="bg-blue-card flex justify-center items-center text-white w-14 h-14 border rounded-full text-center opacity-75 z-10 p-0 m-0 transition-all ease-in-out duration-300">
                    3
                </div>
                <p className="ml-2 text-black whitespace-nowrap">Summary</p>
            </div>
        </nav> */}