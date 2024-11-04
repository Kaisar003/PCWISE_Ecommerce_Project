"use client"
import Link from "next/link";
import Footer1 from "../component/footer";
import Navbar from "../component/navBar";
import CartNavbar from "../component/shopping-cart/cart-navbar";
import OrderSummary from "../component/shopping-cart/order-summary";
import useCartStore from "../../../lib/hooks/useCartStore";
import useSaveItem from "../../../lib/hooks/useSaveItem";

export default function ShoppingCard() {
    const { items, remove, decrease, increase } = useCartStore();
    const { saveItems, addItem, removeItem } = useSaveItem();

    const isInWishlist = (itemId) => saveItems.some((wishlistItem) => wishlistItem.id === itemId);

    const handleClick = (item) => {
        if (isInWishlist(item.id)) {
            removeItem(item.id);
        } else {
            addItem(item);
        }
    };

    return (
        <>
            <Navbar />
            {items.length !== 0 && <CartNavbar />}
            <section className="bg-white py-8 antialiased md:py-16 min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {items.length === 0 ? (
                                    <div className="text-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 w-full">
                                        <p className="text-xl font-semibold text-gray-900 sm:text-2xl my-8">Your cart is empty...</p>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <Link href={`/products/product-overview/${item.id}`} className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20 dark:hidden" src={item.imageUrl} alt={item.name} />
                                                </Link>

                                                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button onClick={() => decrease(item)} type="button" id="decrement-button-4" data-input-counter-decrement="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <div id="counter-input-4" className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0">{item.quantity}</div>
                                                        <button onClick={() => increase(item)} type="button" id="increment-button-4" data-input-counter-increment="counter-input-4" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base font-bold text-gray-900 dark:text-white">${item.price * item.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <Link href={`/products/product-overview/${item.id}`} className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}, {item.specs}</Link>
                                                    <div className="flex items-center gap-4">
                                                        <button onClick={() => handleClick(item)} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isInWishlist(item.id) ? "#3DBDEB" : "none"} viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                            </svg>
                                                            {isInWishlist(item.id) ? "In Favorites" : "Add to Favorites"}
                                                        </button>

                                                        <button onClick={() => remove(item)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
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
                        </div>
                        {items.length !== 0 && <OrderSummary />}
                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    )
}