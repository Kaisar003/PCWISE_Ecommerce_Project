"use client"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import useCartStore from "../../../../lib/hooks/useCartStore";
import { useState, useEffect } from "react";

export default function AddBtn({ inStock, addCart }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { items, increase } = useCartStore();

    const [existItem, setExistItem] = useState();

    useEffect(() => {
        setExistItem(items.find((x) => x.id === addCart.id))
    }, [addCart, items])

    const addToCartHandler = () => {
        increase(addCart);
    }

    return (
        <button
            type="button"
            onClick={session ? addToCartHandler : () => router.push("/login")}
            className={`inline-flex items-center rounded-lg ${inStock ? "bg-blue-card hover:bg-blue-800" : "bg-gray-300 cursor-not-allowed"
                } px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 duration-200 whitespace-nowrap`}
            disabled={!inStock || existItem}
        >
            <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
            </svg>
            {existItem ? "In the cart" : "Add to cart"}
        </button>
    )
}