"use client"
import Link from 'next/link';
import SearchBar from './search-bar';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import useCartStore from '../../../lib/hooks/useCartStore';
import useSaveItem from '../../../lib/hooks/useSaveItem';

export default function Navbar() {
    const { data: session } = useSession();
    const userLink = session?.user ? `/user-settings` : '/login';
    const { items } = useCartStore();
    const { saveItems } = useSaveItem();

    const cartItemCount = items.reduce((a, c) => a + c.quantity, 0);

    return (
        <header className="header top-0 bg-dark-alternate shadow-md flex items-center justify-between px-8 py-02 text-slate-50">
            <h1 className="w-3/12">
                <Link href="/" className="inline-flex">
                    <img src="/logo.png" className="w-15" />
                    <p className="flex items-center text-xl">PC<span className="text-second-color">WISE</span></p>
                </Link>
            </h1>

            <nav className="nav font-semibold text-lg">
                <div className="flex items-center">
                    <Link href="/" className="p-4 hover:text-second-color duration-200 cursor-pointer active">
                        Home
                    </Link>
                    <Link href="/products" className="p-4 hover:text-second-color duration-200 cursor-pointer">
                        Products
                    </Link>
                    <Link href="/support" className="p-4 hover:text-second-color duration-200 cursor-pointer">
                        Support
                    </Link>
                    <Link href="/contact" className="p-4 hover:text-second-color duration-200 cursor-pointer">
                        Contact
                    </Link>
                </div>
            </nav>

            <div className="w-3/12 flex justify-end items-center gap-x-4">
                {/* <div className="relative flex items-center bg-gray-900 p-4">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-white focus:outline-none"
                    >
                        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto border-r border-transparent peer-focus:h-8 peer-focus:w-12 peer-focus:px-3.5 peer-focus:border-sky-1">
                        <path d="M36.8889 40.5L22.8889 26.5C21.7778 27.3889 20.5 28.0926 19.0556 28.6111C17.6111 29.1296 16.0741 29.3889 14.4444 29.3889C10.4074 29.3889 6.99111 27.9904 4.19556 25.1933C1.4 22.3963 0.00148266 18.98 1.17578e-06 14.9444C-0.00148031 10.9089 1.39704 7.49259 4.19556 4.69556C6.99408 1.89852 10.4104 0.5 14.4444 0.5C18.4785 0.5 21.8956 1.89852 24.6956 4.69556C27.4956 7.49259 28.8933 10.9089 28.8889 14.9444C28.8889 16.5741 28.6296 18.1111 28.1111 19.5556C27.5926 21 26.8889 22.2778 26 23.3889L40 37.3889L36.8889 40.5ZM14.4444 24.9444C17.2222 24.9444 19.5837 23.9726 21.5289 22.0289C23.4741 20.0852 24.4459 17.7237 24.4444 14.9444C24.443 12.1652 23.4711 9.80445 21.5289 7.86222C19.5867 5.92 17.2252 4.94741 14.4444 4.94444C11.6637 4.94148 9.30297 5.91407 7.36222 7.86222C5.42148 9.81037 4.44889 12.1711 4.44445 14.9444C4.44 17.7178 5.41259 20.0793 7.36222 22.0289C9.31185 23.9785 11.6726 24.9504 14.4444 24.9444Z" fill="#F5F5F5" />
                    </svg>
                    </button>
                    <input
                        type="text"
                        className={`absolute right-0 ${expanded ? 'block w-48' : 'hidden w-0'
                            } py-2 px-4 text-sm bg-white text-black border border-gray-300 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Search..."
                    />
                </div> */}
                <SearchBar />
                <Link href="/shopping-cart" className='relative'>
                    <svg width="45" height="45" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-w-16 fa-9x">
                        <path d="M43.5417 13.75H38.9583C38.9583 7.33329 33.9167 2.29163 27.5 2.29163C21.0833 2.29163 16.0417 7.33329 16.0417 13.75H11.4583C8.9375 13.75 6.875 15.8125 6.875 18.3333V45.8333C6.875 48.3541 8.9375 50.4166 11.4583 50.4166H43.5417C46.0625 50.4166 48.125 48.3541 48.125 45.8333V18.3333C48.125 15.8125 46.0625 13.75 43.5417 13.75ZM27.5 6.87496C31.3958 6.87496 34.375 9.85413 34.375 13.75H20.625C20.625 9.85413 23.6042 6.87496 27.5 6.87496ZM43.5417 45.8333H11.4583V18.3333H43.5417V45.8333ZM27.5 27.5C23.6042 27.5 20.625 24.5208 20.625 20.625H16.0417C16.0417 27.0416 21.0833 32.0833 27.5 32.0833C33.9167 32.0833 38.9583 27.0416 38.9583 20.625H34.375C34.375 24.5208 31.3958 27.5 27.5 27.5Z" fill="#F5F5F5" />
                    </svg>
                    {cartItemCount > 0 && (
                        <span className='absolute bottom-[55%] left-[65%] bg-red-600 text-white text-sm rounded-full w-5 h-5 flex justify-center items-center'>
                            {cartItemCount}
                        </span>
                    )}
                </Link>
                <Link href="/wishlist" className='relative'>
                    <svg width={36} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                    {saveItems.length > 0 && (
                        <span className='absolute bottom-[55%] left-[65%] bg-red-600 text-white text-sm rounded-full w-5 h-5 flex justify-center items-center'>
                            {saveItems.length}
                        </span>
                    )}
                </Link>
                <Link href={userLink}>
                    <svg width="35" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-inline--fa fa-w-16 fa-9x" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.6819 16.3636C30.6819 18.5335 29.8199 20.6146 28.2855 22.149C26.7511 23.6834 24.67 24.5454 22.5001 24.5454C20.3301 24.5454 18.249 23.6834 16.7146 22.149C15.1802 20.6146 14.3182 18.5335 14.3182 16.3636C14.3182 14.1936 15.1802 12.1125 16.7146 10.5782C18.249 9.04377 20.3301 8.18176 22.5001 8.18176C24.67 8.18176 26.7511 9.04377 28.2855 10.5782C29.8199 12.1125 30.6819 14.1936 30.6819 16.3636ZM26.591 16.3636C26.591 17.4486 26.16 18.4891 25.3928 19.2563C24.6256 20.0235 23.585 20.4545 22.5001 20.4545C21.4151 20.4545 20.3745 20.0235 19.6073 19.2563C18.8402 18.4891 18.4091 17.4486 18.4091 16.3636C18.4091 15.2786 18.8402 14.2381 19.6073 13.4709C20.3745 12.7037 21.4151 12.2727 22.5001 12.2727C23.585 12.2727 24.6256 12.7037 25.3928 13.4709C26.16 14.2381 26.591 15.2786 26.591 16.3636Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.5 0C10.0739 0 0 10.0739 0 22.5C0 34.9261 10.0739 45 22.5 45C34.9261 45 45 34.9261 45 22.5C45 10.0739 34.9261 0 22.5 0ZM4.09091 22.5C4.09091 26.775 5.54932 30.7105 7.99364 33.8359C9.71025 31.5816 11.9248 29.7547 14.4643 28.4979C17.0038 27.2411 19.7995 26.5884 22.633 26.5909C25.4298 26.5883 28.1903 27.224 30.7042 28.4498C33.2181 29.6755 35.419 31.4589 37.1393 33.6641C38.9116 31.3396 40.1049 28.6266 40.6205 25.7494C41.136 22.8722 40.9591 19.9136 40.1042 17.1184C39.2493 14.3232 37.7411 11.7717 35.7044 9.67508C33.6677 7.57846 31.161 5.99699 28.3917 5.0615C25.6224 4.126 22.6702 3.8634 19.7793 4.2954C16.8883 4.7274 14.1418 5.8416 11.767 7.54579C9.39221 9.24999 7.45734 11.4952 6.12251 14.0956C4.78769 16.6961 4.09128 19.577 4.09091 22.5ZM22.5 40.9091C18.274 40.9154 14.1755 39.4616 10.8982 36.7936C12.2174 34.9051 13.9732 33.3632 16.0163 32.2991C18.0594 31.235 20.3293 30.6802 22.633 30.6818C24.9078 30.68 27.1503 31.2209 29.1742 32.2597C31.198 33.2985 32.9448 34.8052 34.2695 36.6545C30.9667 39.4092 26.8007 40.9151 22.5 40.9091Z" fill="white" />
                    </svg>
                </Link>
            </div>
        </header>);
}
