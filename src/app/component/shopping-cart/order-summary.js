"use client"
import { useRouter } from "next/navigation"
import useCartStore from "../../../../lib/hooks/useCartStore";
import { useState } from "react";

export default function OrderSummaryComp() {
    const { itemsPrice, shippingPrice, totalPrice, setDeliveryType, setPaymentType } = useCartStore();
    const [formData, setFormData] = useState({
        deliveryType: '',
        paymentType: '',
    });
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        setDeliveryType(formData.deliveryType);
        setPaymentType(formData.paymentType);
        router.push("/shopping-cart/details")
    }

    return (
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900">Delivery and payment details</p>

                <form onSubmit={handleClick} className="space-y-4">
                    <div className="space-y-4">
                        <hr className="my-4 border-gray-200 mx-2" />
                        <h2 className="text-lg font-medium text-gray-900">Select delivery type</h2>
                        <div className="flex flex-row gap-x-4">
                            <div className="flex flex-row gap-x-4 border border-gray-200 p-4 rounded-md w-fit items-center">
                                <input value="Delivery" name="deliveryType" type="radio" required onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })} className="focus:ring-transparent focus:ring-0 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-primary-500" />
                                <svg width={35} height={35} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="Health_Icons" data-name="Health Icons">
                                            <path d="M35.8,11a3.2,3.2,0,0,0-2.2-1H32V8a2.9,2.9,0,0,0-3-3H5A2.9,2.9,0,0,0,2,8V35a2.9,2.9,0,0,0,3,3H7.3a7,7,0,0,0,13.4,0h6.6a7,7,0,0,0,13.4,0H43a2.9,2.9,0,0,0,3-3V22.2Zm-2.7,3,7.3,8H32V14ZM6,9H28V32.4a7.7,7.7,0,0,0-.7,1.6H20.7A7,7,0,0,0,7.3,34H6Zm8,30a3,3,0,1,1,3-3A2.9,2.9,0,0,1,14,39Zm20,0a3,3,0,1,1,3-3A2.9,2.9,0,0,1,34,39Zm6.7-5A7,7,0,0,0,34,29a6.4,6.4,0,0,0-2,.3V26H42v8Z" />
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-base font-medium text-gray-900">Delivery</p>
                            </div>
                            <div className="flex flex-row gap-x-4 border border-gray-200 p-4 rounded-md w-fit items-center">
                                <input value="Pick up in store" name="deliveryType" required onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })} type="radio" className="focus:ring-transparent focus:ring-0 h-7 w-7 border-gray-300 bg-gray-100 text-primary-600 focus:ring-primary-500" />
                                <svg className="text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={65} height={65} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z" />
                                </svg>
                                <p className="text-base font-medium text-gray-900">Pick-up in store</p>
                            </div>
                        </div>
                        <hr className="my-4 border-gray-200 mx-2" />
                        <h2 className="text-lg font-medium text-gray-900">Select payment type</h2>
                        <div className="flex flex-row gap-x-8 justify-center">
                            <div className="flex flex-row gap-x-4 border border-gray-200 p-4 rounded-md w-fit items-center">
                                <input value="By card" required onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })} name="paymentType" type="radio" className="focus:ring-transparent focus:ring-0 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-primary-500" />
                                <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" /></svg>
                                <p className="text-base font-medium text-gray-900">Online</p>
                            </div>
                            <div className="flex flex-row gap-x-4 border border-gray-200 p-4 rounded-md w-fit items-center">
                                <input value="Cash" required onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })} name="paymentType" type="radio" className="focus:ring-transparent focus:ring-0 h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-primary-500" />
                                <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" /></svg>
                                <p className="text-base font-medium text-gray-900">Cash</p>
                            </div>
                        </div>
                        <hr className="border-gray-200 mx-2" />
                        <dl className="flex items-center justify-between">
                            <dt className="text-base font-normal text-gray-500">Total price</dt>
                            <dd className="text-base font-medium text-gray-900">${itemsPrice}</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4">
                            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping</dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-white">${shippingPrice}</dd>
                        </dl>
                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt className="text-base font-bold text-gray-900 dark:text-white">Overall</dt>
                            <dd className="text-base font-bold text-gray-900 dark:text-white">${totalPrice}</dd>
                        </dl>
                    </div>
                    <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 mt-3 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">Proceed to Checkout</button>
                </form>
                {/* <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                    <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
                        Continue Shopping
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}