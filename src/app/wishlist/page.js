"use client"
import Footer1 from "../component/footer";
import Navbar from "../component/navBar";
import Link from "next/link";
import useSaveItem from "../../../lib/hooks/useSaveItem";
import useCartStore from "../../../lib/hooks/useCartStore";

export default function Wishlist() {
    const { items, increase } = useCartStore();
    const { saveItems, removeItem } = useSaveItem();

    const isInCart = (itemId) => items.some((CartItem) => CartItem.id === itemId);
    const handleClick = (item) => {
        increase(item);
    };

    return (
        <>
            <Navbar />
            <section className="bg-white py-8 antialiased md:py-16 min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Wishlist</h2>
                    {saveItems.length === 0 ? (
                        <div className="text-center rounded-lg border border-gray-200 bg-white p-4 mt-6 shadow-sm md:p-6 w-full">
                            <p className="text-xl font-semibold text-gray-900 sm:text-2xl my-8">No favorite products...</p>
                        </div>
                    ) : (
                        saveItems.map((item) => (
                            <div key={item.id} className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                    <Link href={`/products/product-overview/${item.id}`} className="shrink-0 md:order-1">
                                        <img className="h-20 w-20 dark:hidden" src={item.imageUrl} alt={item.name} />
                                    </Link>
                                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                                        <div className="text-end md:order-4 md:w-32">
                                            <p className="text-base font-bold text-gray-900 dark:text-white">${item.price}</p>
                                        </div>
                                    </div>

                                    <div className="w-full min-w-0 flex-1 mr-auto ml-6 space-y-4 md:order-2 md:max-w-md">
                                        <Link href={`/products/product-overview/${item.id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}, {item.specs}</Link>

                                        <div className="flex items-center gap-4">
                                            <button onClick={() => handleClick(item)} disabled={isInCart(item.id)} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                                                <svg className="me-1.5 h-5 w-5" width="24" height="24" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M43.5417 13.75H38.9583C38.9583 7.33329 33.9167 2.29163 27.5 2.29163C21.0833 2.29163 16.0417 7.33329 16.0417 13.75H11.4583C8.9375 13.75 6.875 15.8125 6.875 18.3333V45.8333C6.875 48.3541 8.9375 50.4166 11.4583 50.4166H43.5417C46.0625 50.4166 48.125 48.3541 48.125 45.8333V18.3333C48.125 15.8125 46.0625 13.75 43.5417 13.75ZM27.5 6.87496C31.3958 6.87496 34.375 9.85413 34.375 13.75H20.625C20.625 9.85413 23.6042 6.87496 27.5 6.87496ZM43.5417 45.8333H11.4583V18.3333H43.5417V45.8333ZM27.5 27.5C23.6042 27.5 20.625 24.5208 20.625 20.625H16.0417C16.0417 27.0416 21.0833 32.0833 27.5 32.0833C33.9167 32.0833 38.9583 27.0416 38.9583 20.625H34.375C34.375 24.5208 31.3958 27.5 27.5 27.5Z" strokeWidth="2" fill="rgb(107 114 128)" />
                                                </svg>
                                                {isInCart(item.id) ? "In the Cart" : "Add to cart"}
                                            </button>

                                            <button onClick={() => removeItem(item.id)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))}
                </div>
            </section>
            <Footer1 />
        </>
    )
}