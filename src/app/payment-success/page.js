"use client";
import Link from "next/link";
import { useEffect } from "react";
import useCartService from "../../../lib/hooks/useCartStore";

const SuccessIcon =
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97228 11.7778 5.73221 11.8799 5.48237 11.8748C5.23253 11.8698 4.99677 11.7582 4.83452 11.5681L0.459523 6.44311C0.145767 6.07557 0.18937 5.52327 0.556912 5.20951C0.924454 4.89575 1.47676 4.93936 1.79051 5.3069L5.52658 9.68343L14.233 0.280522C14.5613 -0.0740672 15.1149 -0.0953599 15.4695 0.232963Z" fill="white" />
    </svg>;

export default function CompletePage() {
    const { reset } = useCartService();

    useEffect(() => {
        reset();
    }, [reset])
    return (
        <div id="payment-status" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
            <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div id="status-icon" className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto mb-4">
                    {SuccessIcon}
                </div>
                <h2 id="status-text" className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-4">Payment Succeeded</h2>
                <p className="text-center text-gray-500 dark:text-gray-400 mb-6">Thank you for your order! Your payment has been processed successfully.</p>

                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6">
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Order Number</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">#7564804</dd>
                    </dl>
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Date</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">14 May 2024</dd>
                    </dl>
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Payment Method</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">JPMorgan monthly installments</dd>
                    </dl>
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Name</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">Flowbite Studios LLC</dd>
                    </dl>
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Address</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">34 Scott Street, San Francisco, CA</dd>
                    </dl>
                    <dl className="flex justify-between">
                        <dt className="font-normal text-gray-500 dark:text-gray-400">Phone</dt>
                        <dd className="font-medium text-gray-900 dark:text-white">+(123) 456 7890</dd>
                    </dl>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <Link href="/products" className="w-full text-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-600 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</Link>
                </div>
            </div>
        </div>
    );
}