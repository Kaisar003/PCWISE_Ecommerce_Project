"use client"
import Footer1 from "../component/footer"
import Card from "../component/home-page/productsCard"
import Navbar from "../component/navBar"
import Link from "next/link"
import { useState, useEffect } from "react"
import Filter from "../component/filter/page"
import productsData from "@/app/products/productsData/data.json";

export default function Products() {
    const [sortCriteria, setSortCriteria] = useState('most-popular');
    const [menuActive, setMenuActive] = useState(false);
    const [visibleCount, setVisibleCount] = useState(9);
    const toggleMenuClass = () => {
        setMenuActive(!menuActive);
    };

    const showMoreProducts = () => {
        setVisibleCount(prevCount => prevCount + 9);
    };

    const products = productsData.products ? productsData.products : productsData;

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 7000,
        selectedCategories: [],
        selectedParts: {},
        selectedRating: []
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        applyFiltersAndSort(newFilters, sortCriteria);
    };

    useEffect(() => {
        applyFiltersAndSort(filters, sortCriteria);
    }, [sortCriteria]);

    const applyFiltersAndSort = (filters, sort) => {
        const normalizeString = str => str.toLowerCase().trim();

        const parseSpecs = specsString => {
            return specsString.split(',').map(part => normalizeString(part));
        };

        let filtered = products.filter(product => {
            const isWithinPriceRange = product.price >= filters.minPrice && product.price <= filters.maxPrice;
            const isInSelectedCategory = filters.selectedCategories.length === 0 || filters.selectedCategories.includes(product.category);

            const productSpecs = parseSpecs(product.specs || '');

            const hasSelectedParts = Object.entries(filters.selectedParts).every(([part, options]) => {
                const normalizedPart = normalizeString(part);

                return options.length === 0 || options.some(option =>
                    productSpecs.some(spec => normalizeString(spec).includes(normalizeString(option)))
                );
            });

            const matchesRating = filters.selectedRating.length === 0 || filters.selectedRating.includes(Math.floor(product.rating));

            return isWithinPriceRange && isInSelectedCategory && hasSelectedParts && matchesRating;
        });

        if (sort) {
            switch (sort) {
                case "price-asc":
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case "price-desc":
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case "rating-desc":
                    filtered.sort((a, b) => b.rating - a.rating);
                    break;
                case "newest":
                    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case "most-popular":
                    filtered.sort((a, b) => b.comments - a.comments);
                    break;
                default:
                    break;
            }
        }

        setFilteredProducts(filtered);
    };


    return (
        <>
            <main>
                <Navbar />
                <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        {/* <!-- Heading & Filters --> */}
                        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                            <div>
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                        <li className="inline-flex items-center">
                                            <Link href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                                <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                                </svg>
                                                <Link href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600s md:ms-2">Products</Link>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                                <h2 className="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl">All products</h2>
                            </div>
                            <div className="relative space-x-4">
                                <button
                                    data-popover-target="menu"
                                    onClick={toggleMenuClass}
                                    type="button"
                                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto"
                                >
                                    <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                                    </svg>
                                    Sort
                                    <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id="dropdownSort1" role="menu" data-popover="menu" className={`absolute left-1/3 transform -translate-x-1/2 divide-x z-10 divide-gray-100 mt-2 w-40 rounded-lg bg-white shadow ${menuActive ? "" : "hidden absolute"}`} data-popper-placement="bottom">
                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton">
                                        <li>
                                            <button onClick={() => setSortCriteria('most-popular')} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </button>
                                        </li>
                                        <li>
                                            <button onClick={() => setSortCriteria('newest')} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </button>
                                        </li>
                                        <li>
                                            <button onClick={() => setSortCriteria('price-asc')} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing price </button>
                                        </li>
                                        <li>
                                            <button onClick={() => setSortCriteria('price-desc')} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing price </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Filter onFilterChange={handleFilterChange} />
                            <div className="mb-4 grid gap-4 sm:grid-cols-1 md:mb-8 lg:grid-cols-2 xl:grid-cols-3 h-fit">
                                {filteredProducts.slice(0, visibleCount).map(product => (
                                    <Card
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        category={product.category}
                                        specs={product.specs}
                                        price={product.price}
                                        rating={product.rating}
                                        comments={product.comments}
                                        delivery={product.delivery}
                                        imageUrl={product.imageUrl}
                                        inStock={product.quantity}
                                        product={productsData}
                                    />
                                ))}
                            </div>
                        </div>
                        {visibleCount < filteredProducts.length && <div onClick={showMoreProducts} className="w-full text-center mt-6">
                            <button type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show more</button>
                        </div>}
                    </div>
                </section>
                <Footer1 />
            </main>
        </>
    )
}