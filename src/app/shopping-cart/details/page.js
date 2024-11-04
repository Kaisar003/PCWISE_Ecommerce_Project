"use client"

import Footer1 from "@/app/component/footer";
import Navbar from "@/app/component/navBar";
import CartNavbar from "@/app/component/shopping-cart/cart-navbar";
import Link from "next/link";
import { useRouter } from "next/navigation"
import useCartService from "../../../../lib/hooks/useCartStore";
import { useState } from "react";
import { getSession } from "next-auth/react";

export default function Details() {
    const router = useRouter();

    const { itemsPrice, shippingPrice, totalPrice, customPCTotalPrice } = useCartService();

    const [formData, setFormData] = useState({
        country: '',
        city: '',
        street: '',
        flatNum: '',
        zipCode: '',
    });
    const [existData, setExistingData] = useState({
        email: "",
        phone: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const session = await getSession();
        // const userId = session.user.id;
        if (!formData.country || !formData.city || !formData.street || !formData.flatNum || !formData.zipCode) {
            setError("Must provide all the credentials!");
        }

        try {
            const response = await fetch('http://localhost:3000/api/orderDetail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // const result = await response.json();
            if (response.ok) {
                const form = e.target;
                form.reset();
                alert('Form submitted successfully');
                router.push("/shopping-cart/summary")
            } else {
                console.error('Failed to submit form:', result.error);
                alert('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <>
            <Navbar />
            <CartNavbar />
            <section className="relative bg-white py-8 antialiased md:py-16">
                <div className=" absolute top-0 left-0 p-4">
                    <Link href={"/shopping-cart"} className="border border-gray-400 bg-white text-black rounded-full font-medium w-10 h-10 flex items-center justify-center hover:bg-gray-800 hover:text-white duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left w-6 h-6" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </Link>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl ml-32">Personal details</h2>
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 flex flex-row gap-x-10 justify-center">
                    <div className="w-5/12 mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="w-full rounded-lg border border-gray-200 bg-white py-8 shadow-sm">
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                <div className="py-5">
                                    <details className="group">
                                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                            <span>Choose your country</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="grid mt-4 ml-1 gap-2">
                                            {['Kazakhstan', 'Poland', 'Germany', 'Russia'].map((country) => (
                                                <div className="flex items-center" key={country}>
                                                    <input
                                                        type="radio"
                                                        name="country"
                                                        value={country}
                                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600"
                                                    />
                                                    <label className="ml-2 text-sm font-medium text-gray-900">{country}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="first_name" id="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="last_name" id="street" value={formData.street} onChange={(e) => setFormData({ ...formData, street: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label htmlFor="street" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                                </div>
                                {/* <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="street" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                                    </div>
                                </div> */}
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="flat-num" id="flat-num" value={formData.flatNum} onChange={(e) => setFormData({ ...formData, flatNum: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="flat-num" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Flat number</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" pattern="[0-9]{5}" name="zip-code" id="zip-code" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="zip-code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zip-code</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" maxLength="12" value={existData.phone} onChange={(e) => setExistingData({ ...existData, phone: e.target.value })} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 whitespace-nowrap">Phone number</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="email" name="email" id="email" value={existData.email} onChange={(e) => setExistingData({ ...existData, email: e.target.value })} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 w-1/4">
                        <div className="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-6 px-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <p className="text-xl font-semibold text-gray-900">Order price</p>

                            <div className="space-y-4">
                                <dl className="flex items-center justify-between">
                                    <dt className="text-base font-normal text-gray-500">Total price</dt>
                                    <dd className="text-base font-medium text-gray-900">${totalPrice && customPCTotalPrice ? totalPrice + customPCTotalPrice : totalPrice || customPCTotalPrice}</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4">
                                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Shipping</dt>
                                    <dd className="text-base font-medium text-gray-900 dark:text-white">${shippingPrice}</dd>
                                </dl>
                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">Overall</dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">${totalPrice && customPCTotalPrice ? totalPrice + customPCTotalPrice : totalPrice || customPCTotalPrice + shippingPrice}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    )
}