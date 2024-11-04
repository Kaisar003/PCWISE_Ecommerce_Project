"use client"
import { useState } from "react";
import Navbar from "@/app/component/navBar"
import Footer1 from "@/app/component/footer"
import parts from "./parts.json";
import Link from "next/link";
import useCartService from "../../../lib/hooks/useCartStore";
import AIChatBtn from "../component/ui/aiChatBtn";
import PSWISEAI_Chat from "../component/AI-ChatBot/page";

export default function CustomPC() {
    const { setTotalPrice } = useCartService(0);

    const cpu = parts.PC_parts[0];
    const gpu = parts.PC_parts[1];
    const mtb = parts.PC_parts[2];
    const ssd = parts.PC_parts[3];
    const ps = parts.PC_parts[4];
    const cs = parts.PC_parts[5];
    const cpc = parts.PC_parts[6];
    const cf = parts.PC_parts[7];
    const ram = parts.PC_parts[8];
    const mon = parts.PC_parts[9];

    const [totalPrice, setTotalPrc] = useState(0);
    const [selectedParts, setSelectedParts] = useState({
        CPU: null,
        GPU: null,
        Motherboard: null,
        SSD: null,
        Power_Supply: null,
        Case: null,
        CPU_Cooling: null,
        Case_Fans: null,
        RAM: null,
        Monitor: null,
    });

    const handleRemovePart = (category) => {
        setSelectedParts((prevSelectedParts) => {
            const updatedParts = {
                ...prevSelectedParts,
                [category]: null,
            };

            const newTotal = Object.values(updatedParts)
                .filter(part => part?.price)
                .reduce((total, part) => total + part.price, 0);

            setTotalPrc(newTotal);

            return updatedParts;
        });
    };

    const handleSelectionChange = (category, part) => {
        setSelectedParts((prevSelectedParts) => {
            const updatedParts = {
                ...prevSelectedParts,
                [category]: part,
            };

            const newTotal = Object.values(updatedParts)
                .filter(part => part?.price)
                .reduce((total, part) => total + part.price, 0);

            setTotalPrc(newTotal);

            return updatedParts;
        });
    };

    setTotalPrice(totalPrice);
    return (
        <>
            <Navbar />
            <section className="px-10 min-h-screen">
                <div className="flex justify-center bg-blue-linear-gradient shadow-md rounded-3xl max-w-5xl m-auto mt-6 mb-12">
                    <div className="p-6 flex items-center gap-x-20">
                        <div className="block">
                            <h2 className="ml-6 mb-5 text-xl text-[#FAF9F6] font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl whitespace-nowrap">
                                Build your custom PC!
                            </h2>
                            <p className="ml-6 text-[#FAF9F6] text-base text-text-alternative md:text-md">Build you dream PC by selecting the right parts for you!</p>
                        </div>
                        <img src="./PC_card.png" className="w-64 mr-6" alt="Image of PC" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-fit w-2/5 mr-10 mb-12">
                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>CPU</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {cpu.CPU.map((part) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={part.name}>
                                            <input
                                                type="checkbox"
                                                name="cpu"
                                                value={part.name}
                                                checked={selectedParts.CPU?.name === part.name} // Check if it's the selected one
                                                onChange={() => handleSelectionChange('CPU', part)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {part.name}, {part.base_clock}, {part.cores} cores, {part.threads} threads <span className="ml- text-primary-600">{part.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>GPU</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {gpu.GPU.map((gp) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={gp.name}>
                                            <input
                                                type="checkbox"
                                                name="gpu"
                                                value={gp.name}
                                                checked={selectedParts.GPU?.name === gp.name} // Check if it's the selected one
                                                onChange={() => handleSelectionChange('GPU', gp)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {gp.name} ,{gp.memory} , {gp.base_clock} <span className="text-end text-primary-600">{gp.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Motherboard</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {mtb.Motherboard.map((sd) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={sd.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.Motherboard?.name === sd.name} // Check if it's the selected one
                                                onChange={() => handleSelectionChange("Motherboard", sd)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {sd.name}, {sd.socket}, {sd.form_factor}, {sd.chipset} <span className="text-right text-primary-600">{sd.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>SSD</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {ssd.SSD.map((sd) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={sd.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.SSD?.name === sd.name} // Check if it's the selected one
                                                onChange={() => handleSelectionChange('SSD', sd)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {sd.name}, {sd.capacity}, {sd.interface} <span className="text-right text-primary-600">{sd.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Power_Supply</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {ps.Power_Supply.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.Power_Supply?.name === ps.name} // Check if it's the selected one
                                                onChange={() => handleSelectionChange('Power_Supply', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.wattage}, {ps.certification} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Case</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {cs.Case.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.Case?.name === ps.name}
                                                onChange={() => handleSelectionChange('Case', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.form_factor}, {ps.color} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>CPU Cooling</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {cpc.CPU_Cooling.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.CPU_Cooling?.name === ps.name}
                                                onChange={() => handleSelectionChange('CPU_Cooling', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.type} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Case Fans</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {cf.Case_Fans.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.Case_Fans?.name === ps.name}
                                                onChange={() => handleSelectionChange('Case_Fans', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.size} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>RAM</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {ram.RAM.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.RAM?.name === ps.name}
                                                onChange={() => handleSelectionChange('RAM', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.capacity}, {ps.speed}, {ps.type} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>

                        <div className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>Monitor (Optional)</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg
                                            fill="none"
                                            height="24"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="24"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="grid mt-4 ml-1 gap-2">
                                    {mon.Monitor.map((ps) => (
                                        <div className="flex items-center border border-gray-400 p-3 rounded-md" key={ps.name}>
                                            <input
                                                type="checkbox"
                                                checked={selectedParts.Monitor?.name === ps.name}
                                                onChange={() => handleSelectionChange('Monitor', ps)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                className="ml-2 text-sm font-medium text-gray-900 flex justify-between w-full"
                                            >
                                                {ps.name}, {ps.size}, {ps.resolution}, {ps.refresh_rate} <span className="text-right text-primary-600">{ps.price}$</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <p className="text-xl font-semibold text-gray-900">Delivery and payment details</p>

                            <div className="space-y-4">
                                <div className="space-y-4">
                                    <hr className="my-4 border-gray-200 mx-2" />
                                    {Object.entries(selectedParts).map(([category, part]) => part && (
                                        <dl key={category} className="flex items-center justify-between">
                                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">{category}</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white flex items-center">
                                                ${part.price || "0"}
                                                <button
                                                    onClick={() => handleRemovePart(category)}
                                                    className="ml-4 text-red-500 hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </dd>
                                        </dl>
                                    ))}
                                    <hr className="border-gray-200 mx-2" />
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total price</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">${totalPrice}</dd>
                                    </dl>
                                </div>
                                <Link href={"/shopping-cart/details"} className="flex w-full items-center justify-center rounded-lg bg-primary-700 mt-3 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AIChatBtn />
            <PSWISEAI_Chat />
            <Footer1 />
        </>
    )
}