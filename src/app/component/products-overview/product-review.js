

export default function ProductReview({ revRate, reviewer, revDate, revTitle, review }) {
    const fullStars = Math.floor(revRate); // Number of full stars
    const emptyStars = 5 - fullStars; // Number of empty stars
    return (
        <>
            <hr className="my-6 md:my-8 border-gray-200 mx-6" />
            <div className="flex flex-row px-6 items-baseline">
                <div className="flex-col">
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <p
                            className="text-lg font-medium leading-none text-gray-500 dark:text-gray-400"
                        >
                            ({revRate})
                        </p>
                        <div className="flex items-center">
                            {/* Render full stars */}
                            {Array.from({ length: fullStars }).map((_, index) => (
                                <svg key={index} className="h-6 w-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            ))}
                            {/* Render empty stars */}
                            {Array.from({ length: emptyStars }).map((_, index) => (
                                <svg key={index} className="h-6 w-6 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-800 font-medium text-lg mt-2">{reviewer}</p>
                    <p className="text-gray-800 font-medium text-lg">{revDate}</p>
                </div>
                <div className="flex-col mx-10">
                    <h2 className="text-gray-800 font-bold text-lg sm:text-2xl mb-2">{revTitle}</h2>
                    <p className="text-base font-medium leading-none text-gray-500">
                        {review}
                    </p>
                </div>
            </div>
        </>
    )
}