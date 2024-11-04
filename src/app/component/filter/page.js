"use client"
import { useState, useEffect } from "react";
import filterData from "./filter.json";


export default function Filter({ onFilterChange }) {
    const filters = filterData.filter[0].filter_by_parts;
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(7000);
    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice);
        setMaxPrice(value);
    };

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedParts, setSelectedParts] = useState({});
    const [selectedRating, setSelectedRating] = useState([]);

    const handleCategoryChange = (category, isChecked) => {
        setSelectedCategories((prev) =>
            isChecked
                ? [...prev, category]
                : prev.filter((item) => item !== category)
        );
    };

    const handlePartChange = (category, option, isChecked) => {
        setSelectedParts((prev) => ({
            ...prev,
            [category]: isChecked
                ? [...(prev[category] || []), option]
                : (prev[category] || []).filter((item) => item !== option)
        }));
    };

    const handleRatingChange = (rating) => {
        setSelectedRating(prevRatings =>
            prevRatings.includes(rating)
                ? prevRatings.filter(r => r !== rating) // Remove rating if it's already selected
                : [...prevRatings, rating] // Add rating if it's not already selected
        );
    };

    const handleReset = () => {
        setMinPrice(0);
        setMaxPrice(7000);
        setSelectedCategories([]);
        setSelectedParts({});
        setSelectedRating([]);
    };

    useEffect(() => {
        onFilterChange({
            minPrice,
            maxPrice,
            selectedCategories,
            selectedParts,
            selectedRating,
        });
    }, [minPrice, maxPrice, selectedCategories, selectedParts, selectedRating]);

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-fit w-2/6 mr-10">
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Category</span>
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
                        {["Laptop", "PC", "Accessory"].map((category) => (
                            <div className="flex items-center" key={category}>
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={(e) => handleCategoryChange(category, e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                />
                                <label
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Filter by parts</span>
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
                    <div className="grid mt-4 ml-1 gap-y-4">
                        {Object.entries(filters).map(([category, options]) => (
                            <details key={category}>
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>{category}</span>
                                    <span className="transition">
                                        <svg
                                            fill="none"
                                            height="20"
                                            shapeRendering="geometricPrecision"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            width="20"
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <div className="ml-4 mt-2 space-y-1">
                                    {options.map(option => (
                                        <div className="flex items-center" key={option}>
                                            <input
                                                type="checkbox"
                                                id={option}
                                                checked={(selectedParts[category] || []).includes(option)}
                                                onChange={(e) => handlePartChange(category, option, e.target.checked)}
                                                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                            <label
                                                htmlFor={option}
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Price</span>
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
                    <div className="grid grid-cols-2 mt-4 ml-1 gap-3">
                        <div>
                            <label htmlFor="min-price" className="block text-sm font-medium text-gray-900 dark:text-white">
                                Min Price
                            </label>
                            <input
                                id="min-price"
                                type="range"
                                min="0"
                                max="7000"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                            />
                        </div>

                        <div>
                            <label htmlFor="max-price" className="block text-sm font-medium text-gray-900 dark:text-white">
                                Max Price
                            </label>
                            <input
                                id="max-price"
                                type="range"
                                min="0"
                                max="7000"
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                            />
                        </div>

                        <div className="col-span-2 flex items-center justify-between space-x-2">
                            <input
                                type="number"
                                id="min-price-input"
                                min="0"
                                max="7000"
                                value={minPrice}
                                onChange={handleMinPriceChange}
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                placeholder=""
                                required
                            />

                            <div className="shrink-0 text-sm font-medium dark:text-gray-300">to</div>

                            <input
                                type="number"
                                id="max-price-input"
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                                min="0"
                                max="7000"
                                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                </details>
            </div>

            <div className="py-5">
                <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>Rating</span>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className="space-y-2 mt-4 ml-1">
                        {[5, 4, 3, 2, 1].map(rating => (
                            <div key={rating} className="flex items-center">
                                <input
                                    id={`rating-${rating}`}
                                    type="checkbox"
                                    value={rating}
                                    name="rating"
                                    checked={selectedRating.includes(rating)}
                                    onChange={() => handleRatingChange(rating)}
                                    className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                />
                                <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                                    {[...Array(rating)].map((_, index) => (
                                        <svg
                                            key={index}
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                    <span className="pl-1 text-gray-500">({rating})</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </details>
            </div>

            <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
                <button type="submit" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 duration-200 whitespace-nowrap">Show results</button>
                <button onClick={handleReset} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 duration-200">Reset</button>
            </div>
        </div>
    )
}