"use client"
import Footer1 from "@/app/component/footer";
import Navbar from "@/app/component/navBar";
import CartNavbar from "@/app/component/shopping-cart/cart-navbar";
import Link from "next/link";
import useCartService from "../../../../lib/hooks/useCartStore";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/app/component/stripe/CheckoutPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { purchasedStore } from "../../../../lib/hooks/usePurchasedItems";

const striprPromise = loadStripe("pk_test_51Pw547RpqRVESDyYaF59Sc76dlRu0m4gEOwx1ztEPyVxdzsaS2rW9ey3xsQTKcDMChHiJpPmeNqxl8hkrg2I68hb00LDCq3vqS");

export default function OrderSummary() {
    const router = useRouter();
    const { shippingPrice, totalPrice, deliveryType, paymentType, customPCTotalPrice, items } = useCartService();
    const { add } = purchasedStore();
    const [overall, setOverall] = useState();

    useEffect(() => {
        const total = (totalPrice || 0) + (customPCTotalPrice || 0) + (shippingPrice || 0);
        setOverall(Math.round(total));
    }, [totalPrice, customPCTotalPrice, shippingPrice]);

    useEffect(() => {
        for (let i = 0; i < items.length; i++) {
            add(items[i]);
        }
        // items.forEach(item => {
        //     const alreadyInStore = purchasedStore.getState().purchasedItems.find(i => i.id === item.id);
        //     if (!alreadyInStore) {
        //     }
        // });
    }, [items]);

    return (
        <>
            <Navbar />
            <CartNavbar />
            <section className="relative bg-white py-8 antialiased md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-5xl">
                        <div className=" absolute top-0 left-0 p-4">
                            <Link href={"/shopping-cart/details"} className="border border-gray-400 bg-white text-black rounded-full font-medium w-10 h-10 flex items-center justify-center hover:bg-gray-800 hover:text-white duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left w-6 h-6" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </Link>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Summary</h2>
                        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 mx-26">
                            {paymentType === "By card" ? (
                                <Elements stripe={striprPromise} options={{ mode: "payment", currency: "usd", amount: overall }}>
                                    <CheckoutPage amount={overall} />
                                </Elements>)
                                : (<div className="text-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 w-full">
                                    <p className="text-xl font-semibold text-gray-900 sm:text-2xl my-8">Payment in our store</p>
                                </div>)}

                            <div className="mt-6 grow sm:mt-8 lg:mt-0 min-w-96">
                                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                                    <div className="gap-y-2">
                                        <h2 className="text-lg font-medium text-gray-900 sm:text-2xl mb-4">Personal details</h2>
                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">First name</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{ }</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Last name</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{ }</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Address</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{ }</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Email</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{ }</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-2">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Phone number</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{ }</dd>
                                            </dl>
                                        </div>

                                        <h2 className="text-lg font-medium text-gray-900 sm:text-2xl my-4">Order price</h2>

                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery type</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{deliveryType}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Payment type</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">{paymentType}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Total price</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">${overall}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">${shippingPrice}</dd>
                                            </dl>
                                        </div>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                                        <dt className="text-base font-bold text-gray-900 dark:text-white">Overall</dt>
                                        <dd className="text-base font-bold text-gray-900 dark:text-white">${overall}</dd>
                                    </dl>
                                    {paymentType === "Cash" && <button onClick={() => router.push("/payment-seccess")} className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 ">Proceed</button>}
                                </div>
                            </div>
                        </div>
                    </div></div>
            </section>
            <Footer1 />
        </>
    )
}