"use client"
import { useState } from "react";
import Footer1 from "@/app/component/footer";
import Navbar from "@/app/component/navBar";

export default function ReturnItem() {
    const [orderNumber, setOrderNumber] = useState('');
    const [productName, setProductName] = useState('');
    const [reason, setReason] = useState('');
    const [email, setEmail] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Add your form submission logic here
    };
    return (
        <>
            <Navbar />
            <section className="bg-white py-8 antialiased md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Return Item</h2>
                    <p className="mt-4 text-gray-600">
                        Please fill out the form below to request a return. Our customer service team will get back to you as soon as possible.
                    </p>
                    <div className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">

                        {submitted ? (
                            <div className="mt-6 text-center">
                                <h2 className="text-xl font-semibold text-green-600">Thank you for your request!</h2>
                                <p className="text-gray-700 mt-2">
                                    Your return request has been submitted successfully. We will contact you soon with further instructions.
                                </p>
                            </div>
                        ) : (
                            <form className="mt-6" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Order Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        value={orderNumber}
                                        onChange={(e) => setOrderNumber(e.target.value)}
                                        placeholder="Enter your order number"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Product Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        placeholder="Enter the product name"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Reason for Return</label>
                                    <select
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        required
                                    >
                                        <option value="">Select a reason</option>
                                        <option value="Defective Product">Defective Product</option>
                                        <option value="Incorrect Item Received">Incorrect Item Received</option>
                                        <option value="Item Damaged During Shipping">Item Damaged During Shipping</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Additional Information (Optional)</label>
                                    <textarea
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        value={additionalInfo}
                                        onChange={(e) => setAdditionalInfo(e.target.value)}
                                        placeholder="Provide any additional details"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    >
                                        Submit Return Request
                                    </button>
                                </div>
                            </form>
                        )}

                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    )
}