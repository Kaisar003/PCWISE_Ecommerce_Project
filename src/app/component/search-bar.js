"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import productsData from '@/app/products/productsData/data.json';

export default function SearchBar() {
    const [searchItem, setSearchItem] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                inputRef.current && !inputRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setIsFocused(false);
                setFilteredProducts([]);
                setSearchItem('');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inputRef, dropdownRef]);

    useEffect(() => {
        if (searchItem) {
            const results = productsData.products.filter(product =>
                product.name.toLowerCase().includes(searchItem.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [searchItem]);

    const handleInputChange = (e) => {
        setSearchItem(e.target.value);
        setIsFocused(true);
    };

    const handleProductClick = (id) => {
        setSearchItem('');
        setFilteredProducts([]);
        setIsFocused(false);
    };

    return (
        <div className="relative">
            <form action="" className='relative'>
                <input
                    ref={inputRef}
                    type="search"
                    value={searchItem}
                    onChange={handleInputChange}
                    className={`peer cursor-pointer relative z-10 h-9 transition-all duration-200 ${isFocused ? 'w-full pl-16 pr-4' : 'w-9 pl-4'
                        } rounded-full bg-transparent outline-none border border-transparent focus:border-2 focus:cursor-text focus:border-sky-500`}
                    onFocus={() => setIsFocused(true)}
                />
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-y-0 my-auto transition-all duration-200 ${isFocused ? 'h-8 w-12 px-3.5 border-r border-sky-500' : 'h-9 w-9'
                        } peer-focus:border-sky-500`}
                >
                    <path
                        d="M36.8889 40.5L22.8889 26.5C21.7778 27.3889 20.5 28.0926 19.0556 28.6111C17.6111 29.1296 16.0741 29.3889 14.4444 29.3889C10.4074 29.3889 6.99111 27.9904 4.19556 25.1933C1.4 22.3963 0.00148266 18.98 1.17578e-06 14.9444C-0.00148031 10.9089 1.39704 7.49259 4.19556 4.69556C6.99408 1.89852 10.4104 0.5 14.4444 0.5C18.4785 0.5 21.8956 1.89852 24.6956 4.69556C27.4956 7.49259 28.8933 10.9089 28.8889 14.9444C28.8889 16.5741 28.6296 18.1111 28.1111 19.5556C27.5926 21 26.8889 22.2778 26 23.3889L40 37.3889L36.8889 40.5ZM14.4444 24.9444C17.2222 24.9444 19.5837 23.9726 21.5289 22.0289C23.4741 20.0852 24.4459 17.7237 24.4444 14.9444C24.443 12.1652 23.4711 9.80445 21.5289 7.86222C19.5867 5.92 17.2252 4.94741 14.4444 4.94444C11.6637 4.94148 9.30297 5.91407 7.36222 7.86222C5.42148 9.81037 4.44889 12.1711 4.44445 14.9444C4.44 17.7178 5.41259 20.0793 7.36222 22.0289C9.31185 23.9785 11.6726 24.9504 14.4444 24.9444Z"
                        fill="#F5F5F5"
                    />
                </svg>
            </form>
            {isFocused && filteredProducts.length > 0 && (
                <div
                    ref={dropdownRef}
                    className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg"
                >
                    <ul>
                        {filteredProducts.map((product) => (
                            <li key={product.id}>
                                <Link
                                    className="block p-2 hover:bg-gray-100 cursor-pointer text-gray-500"
                                    href={`/products/product-overview/${product.id}`}
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    {product.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}