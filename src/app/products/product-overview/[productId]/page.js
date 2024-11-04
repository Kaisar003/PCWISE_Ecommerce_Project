"use client"
import Footer1 from "@/app/component/footer";
import Navbar from "@/app/component/navBar";
import ProductReview from "../../../component/products-overview/product-review";
import Link from "next/link";
import Carousel from "../../../component/products-overview/carousel";
import products from "@/app/products/productsData/data.json";
import Reviews from "@/app/products/productsData/reviews.json";
import ProductOvrBtn from "@/app/component/ui/singleProductBtns";
import useCartStore from "../../../../../lib/hooks/useCartStore";

export default function Overview({ params: { productId } }) {
    const product = products.products.find((prod) => prod.id === productId);

    const fullStars = Math.floor(product.rating); // Number of full stars
    const emptyStars = 5 - fullStars; // Number of empty stars

    const handleSubmit = () => {

    }

    return (
        <>
            <Navbar />
            <section className="relative py-8 bg-white md:py-16 antialiased">
                {/*<a href="/products" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 duration-200">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg></a> */}
                <div className=" absolute top-0 left-0 p-4">
                    <Link href="/products" className="border border-gray-400 bg-white text-black rounded-full font-medium w-10 h-10 flex items-center justify-center hover:bg-gray-800 hover:text-white duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left w-6 h-6" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </Link>
                </div>
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 mb-44">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full h-full" src={product.imageUrl} alt="Products image" />
                            <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
                        </div>

                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h2
                                className="text-xl font-semibold text-gray-900 sm:text-2xl"
                            >
                                {product.name}<br />
                                {product.specs}
                            </h2>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p
                                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                                >
                                    {product.price}$
                                </p>

                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <div className="flex items-center">
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
                                    <p
                                        className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                    >
                                        ({product.rating})
                                    </p>
                                    <p
                                        className="text-sm font-medium leading-none text-gray-900"
                                    >
                                        {product.comments} Reviews
                                    </p>
                                </div>
                            </div>

                            <ProductOvrBtn addCart={{ ...product, quantity: 1 }} savedItem={product} />

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                Studio quality three mic array for crystal clear calls and voice
                                recordings. Six-speaker sound system for a remarkably robust and
                                high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                            </p>

                            <p className="text-gray-500 dark:text-gray-400">
                                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                                Magic Keyboard or Magic Keyboard with Touch ID.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mt-6 mb-24 border-gray-200 mx-6" />
                <h2 className="m-6 mb-0 text-xl font-semibold text-gray-900 sm:text-2xl">Customer Reviews</h2>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        {Reviews.reviews.slice(0, 4).map(product => (
                            <ProductReview key={product.revId} reviewer={product.reviewer} revRate={product.revRate} revDate={product.revDate} revTitle={product.revTitle} review={product.review} />
                        ))}
                    </div>
                    <div className="w-2/6 mx-10 mt-6 rounded-lg border border-gray-200 p-6 shadow-sm h-fit">
                        <h2 className="text-xl mb-4 whitespace-nowrap font-semibold text-gray-900 sm:text-2xl">Write a review</h2>
                        <form onSubmit={handleSubmit} className="max-w-sm">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title of the review</label>
                                <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
                            </div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your opinion</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your review..."></textarea>
                            <button type="submit" className="inline-flex items-center rounded-lg bg-blue-card my-5 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-200">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="mt-24 border-gray-200 mx-6" />
                <Carousel />
            </section>
            <Footer1 />
        </>
    )
}