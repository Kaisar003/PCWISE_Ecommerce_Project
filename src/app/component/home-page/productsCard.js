"use client"
import Link from "next/link";
import FavoritesButtons from "../ui/addToFavorites";
import AddBtn from "../ui/addToCartBtn";
import Products from "@/app/products/productsData/data.json"


export default function Card({ id, name, category, specs, price, rating, comments, delivery, imageUrl, inStock }) {
    const fullStars = Math.floor(rating); // Number of full stars
    const emptyStars = 5 - fullStars; // Number of empty stars
    const product = Products.products.find((prod) => prod.id === id);

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-fit">
            <div className="h-56 w-full">
                <Link href={`/products/product-overview/${id}`}>
                    <img className="mx-auto h-full" src={`${imageUrl}`} alt={`${name} image`} />
                </Link>
            </div>
            <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center justify-end gap-1">
                        <FavoritesButtons item={product} />
                        <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300" data-popper-placement="top">
                            Add to favorites
                            <div className="tooltip-arrow" data-popper-arrow=""></div>
                        </div>
                    </div>
                </div>

                <Link href={`/products/product-overview/${id}`} className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                    {name}
                </Link>

                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        {/* Render full stars */}
                        {Array.from({ length: fullStars }).map((_, index) => (
                            <svg key={index} className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                        ))}
                        {/* Render empty stars */}
                        {Array.from({ length: emptyStars }).map((_, index) => (
                            <svg key={index} className="h-4 w-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                            </svg>
                        ))}
                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-white">{rating}</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({comments})</p>
                </div>

                <ul className="mt-2 flex items-center gap-4">
                    <li className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{delivery}</p>
                    </li>
                </ul>

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${price}</p>

                    <AddBtn addCart={{ ...product, quantity: 1 }} inStock={inStock} />
                </div>
            </div>
        </div>
    );
}