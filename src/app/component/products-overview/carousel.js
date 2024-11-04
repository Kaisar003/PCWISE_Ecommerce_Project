"use client"
import { useState, useRef, useEffect } from 'react';
import Products from "@/app/products/productsData/data.json";
import Card from '@/app/component/home-page/productsCard';

const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
            <div className="carousel my-12 mx-auto">
                <h2 className="m-6 mt-24 text-xl font-semibold text-gray-900 sm:text-2xl">Recomended</h2>
                <div className="relative overflow-hidden">
                    <div className="flex justify-between items-center absolute top left w-full h-full px-2">
                        <button
                            onClick={movePrev}
                            className="bg-blue-card flex justify-center items-center hover:bg-blue-800 text-white w-16 h-16 border rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                            disabled={isDisabled('prev')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span className="sr-only">Prev</span>
                        </button>
                        <button
                            onClick={moveNext}
                            className="bg-blue-card flex justify-center items-center hover:bg-blue-800 text-white w-16 h-16 border rounded-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                            disabled={isDisabled('next')}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                    <div
                        ref={carousel}
                        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                        {Products.products.map((resource) => (
                            <div
                                key={resource.id}
                                className="carousel-item text-center relative snap-start"
                            >
                                <Card
                                    id={resource.id}
                                    name={resource.name}
                                    category={resource.category}
                                    specs={resource.specs}
                                    price={resource.price}
                                    rating={resource.rating}
                                    comments={resource.comments}
                                    imageUrl={resource.imageUrl}
                                    delivery={resource.delivery}
                                    inStock={resource.quantity} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;