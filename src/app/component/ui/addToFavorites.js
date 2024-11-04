"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useWishlistStore from "../../../../lib/hooks/useSaveItem";

export default function FavoritesButton({ item }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    const { saveItems, addItem, removeItem } = useWishlistStore();
    const [inWishlist, setInWishlist] = useState(false);

    useEffect(() => {
        setInWishlist(saveItems.some((wishlistItem) => wishlistItem.id === item.id));
    }, [saveItems, item.id]);

    const handleClick = () => {
        if (inWishlist) {
            removeItem(item.id);
        } else {
            addItem(item);
        }
    };

    return (
        <button
            type="button"
            onClick={session ? handleClick : () => router.push("/login")}
            data-tooltip-target="tooltip-add-to-favorites"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
            <span className="sr-only">Add to Favorites</span>
            <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill={inWishlist ? "#3DBDEB" : "none"} // Set the fill color based on the state
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
            </svg>
        </button>
    );
}