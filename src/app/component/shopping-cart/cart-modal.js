"use client"
import { useState } from 'react';
// export default function CartModal() {
//     return (
//         <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
//             {/* <!--
//     Background backdrop, show/hide based on slide-over state.

//     Entering: "ease-in-out duration-500"
//       From: "opacity-0"
//       To: "opacity-100"
//     Leaving: "ease-in-out duration-500"
//       From: "opacity-100"
//       To: "opacity-0"
//   --> */}
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

//             <div className="fixed inset-0 overflow-hidden">
//                 <div className="absolute inset-0 overflow-hidden">
//                     <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//                         {/* <!--
//           Slide-over panel, show/hide based on slide-over state.

//           Entering: "transform transition ease-in-out duration-500 sm:duration-700"
//             From: "translate-x-full"
//             To: "translate-x-0"
//           Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
//             From: "translate-x-0"
//             To: "translate-x-full"
//         --> */}
//                         <div className="pointer-events-auto w-screen max-w-md">
//                             <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                                     <div className="flex items-start justify-between">
//                                         <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
//                                         <div className="ml-3 flex h-7 items-center">
//                                             <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
//                                                 <span className="absolute -inset-0.5"></span>
//                                                 <span className="sr-only">Close panel</span>
//                                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                                 </svg>
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <div className="mt-8">
//                                         <div className="flow-root">
//                                             <ul role="list" className="-my-6 divide-y divide-gray-200">
//                                                 <li className="flex py-6">
//                                                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                                         <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
//                                                     </div>

//                                                     <div className="ml-4 flex flex-1 flex-col">
//                                                         <div>
//                                                             <div className="flex justify-between text-base font-medium text-gray-900">
//                                                                 <h3>
//                                                                     <a href="#">Throwback Hip Bag</a>
//                                                                 </h3>
//                                                                 <p className="ml-4">$90.00</p>
//                                                             </div>
//                                                             <p className="mt-1 text-sm text-gray-500">Salmon</p>
//                                                         </div>
//                                                         <div className="flex flex-1 items-end justify-between text-sm">
//                                                             <p className="text-gray-500">Qty 1</p>

//                                                             <div className="flex">
//                                                                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                                 <li className="flex py-6">
//                                                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                                         <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
//                                                     </div>

//                                                     <div className="ml-4 flex flex-1 flex-col">
//                                                         <div>
//                                                             <div className="flex justify-between text-base font-medium text-gray-900">
//                                                                 <h3>
//                                                                     <a href="#">Medium Stuff Satchel</a>
//                                                                 </h3>
//                                                                 <p className="ml-4">$32.00</p>
//                                                             </div>
//                                                             <p className="mt-1 text-sm text-gray-500">Blue</p>
//                                                         </div>
//                                                         <div className="flex flex-1 items-end justify-between text-sm">
//                                                             <p className="text-gray-500">Qty 1</p>

//                                                             <div className="flex">
//                                                                 <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>

//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                         <p>Subtotal</p>
//                                         <p>$262.00</p>
//                                     </div>
//                                     <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                                     <div className="mt-6">
//                                         <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
//                                     </div>
//                                     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                                         <p>
//                                             or
//                                             <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                                 Continue Shopping
//                                                 <span aria-hidden="true"> &rarr;</span>
//                                             </button>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
];

export default function ShoppingCart() {
    const [open, setOpen] = useState(true);

    return (
        <>
            {/* Backdrop */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out"
                />
            )}

            {/* Shopping Cart Panel */}
            <div
                className={`fixed inset-y-0 right-0 flex max-w-full pl-10 transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="w-screen max-w-md transform">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">Close panel</span>
                                        {/* Close icon */}
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img
                                                        alt={product.imageAlt}
                                                        src={product.imageSrc}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href={product.href}>{product.name}</a>
                                                            </h3>
                                                            <p className="ml-4">{product.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">Qty {product.quantity}</p>

                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Checkout
                                </a>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
