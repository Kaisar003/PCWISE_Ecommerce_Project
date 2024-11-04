import HomeRev from "@/app/products/productsData/homeRev.json";

export default function Feedback() {
    return (
        <section>
            <div className="max-w-full p-5 sm:p-10 md:p-16 text-center">
                <h2 className="font-semibold text-7xl mt-24">What others say?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 text-black my-32">
                    {HomeRev.shopReview.map(rev => (
                        <div key={rev.index} className="flex flex-col items-center bg-white shadow-md rounded-3xl max-w-sm dark:bg-gray-800 dark:border-gray-700 p-10">
                            <img className="w-32 h-32 rounded-full" src={rev.imageUrl} alt="user avatar" width="400" height="400" loading="lazy" />
                            <p className="font-bold text-xl mt-5">{rev.full_name}</p>
                            <div className="mt-2 flex items-center gap-2">
                                <div className="flex items-center">
                                    {Array.from({ length: Math.floor(rev.rate) }).map((_, index) => (
                                        <svg key={index} className="h-5 w-5 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>
                                    ))}
                                    {/* Render empty stars */}
                                    {Array.from({ length: 5 - Math.floor(rev.rate) }).map((_, index) => (
                                        <svg key={index} className="h-5 w-5 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-sm font-medium text-gray-500">({rev.rate})</p>
                            </div>
                            <svg className="relative right-1/2 mt-2" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59315 32.4769C6.6619 30.4256 5.62502 28.125 5.62502 24.3956C5.62502 17.8331 10.23 11.9513 16.9313 9.04313L18.6056 11.6269C12.3525 15.0094 11.13 19.3988 10.6406 22.1663C11.6475 21.645 12.9656 21.4631 14.2594 21.5831C17.6419 21.8962 20.3081 24.6731 20.3081 28.125C20.3081 29.8655 19.6167 31.5347 18.386 32.7654C17.1553 33.9961 15.4861 34.6875 13.7456 34.6875C11.7338 34.6875 9.80815 33.7688 8.59315 32.4769ZM27.3431 32.4769C25.4119 30.4256 24.375 28.125 24.375 24.3956C24.375 17.8331 28.98 11.9513 35.6813 9.04313L37.3556 11.6269C31.1025 15.0094 29.88 19.3988 29.3925 22.1663C30.3994 21.645 31.7175 21.4631 33.0094 21.5831C36.3919 21.8944 39.0563 24.6713 39.0563 28.125C39.0563 29.8655 38.3649 31.5347 37.1342 32.7654C35.9035 33.9961 34.2343 34.6875 32.4938 34.6875C30.4819 34.6875 28.5563 33.7688 27.3413 32.4769" fill="#91919C" />
                            </svg>
                            <p>{rev.comment}</p>
                            <svg className="relative left-1/2" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.4069 12.5231C38.3381 14.5744 39.375 16.875 39.375 20.6044C39.375 27.1669 34.77 33.0487 28.0687 35.9569L26.3944 33.3731C32.6475 29.9906 33.87 25.6013 34.3594 22.8338C33.3525 23.355 32.0344 23.5369 30.7406 23.4169C27.3581 23.1038 24.6919 20.3269 24.6919 16.875C24.6919 15.1345 25.3833 13.4653 26.614 12.2346C27.8447 11.0039 29.5139 10.3125 31.2544 10.3125C33.2662 10.3125 35.1919 11.2312 36.4069 12.5231ZM17.6569 12.5231C19.5881 14.5744 20.625 16.875 20.625 20.6044C20.625 27.1669 16.02 33.0487 9.31873 35.9569L7.64435 33.3731C13.8975 29.9906 15.12 25.6013 15.6075 22.8338C14.6006 23.355 13.2825 23.5369 11.9906 23.4169C8.6081 23.1056 5.94373 20.3287 5.94373 16.875C5.94373 15.1345 6.63513 13.4653 7.86584 12.2346C9.09654 11.0039 10.7657 10.3125 12.5062 10.3125C14.5181 10.3125 16.4437 11.2312 17.6587 12.5231" fill="#91919C" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}