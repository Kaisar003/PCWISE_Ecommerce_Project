"use client"
import { useState } from "react";

export default function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Enter password"
                id="password"
                type={
                    showPassword ? "text" : "password"
                }
                value={value}
                onChange={onChange}
            />
            <button
                type="button"
                id="check"
                onClick={() =>
                    setShowPassword((prev) => !prev)
                }
                className="absolute inset-y-0 right-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-r-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
            >
                <svg
                    className="shrink-0 w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {showPassword ? (
                        <>
                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </>
                    ) : (
                        <>
                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line x1="2" x2="22" y1="2" y2="22"></line>
                        </>
                    )}
                </svg>
            </button>
        </div>
    )
}