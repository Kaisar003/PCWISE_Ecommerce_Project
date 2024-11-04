"use client"
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import Footer1 from "../component/footer";
import Navbar from "../component/navBar";
import Link from "next/link";
import Image from "next/image";
import DeleteModal from "@/app/component/modal-windows/deleteModal";
import usePurchasedItems from "../../../lib/hooks/usePurchasedItems";

export default function UserSettings() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAddressEditing, setAddressEditing] = useState(false);
    const [pswEdit, setPswEdit] = useState(false);
    const [profileEdit, setProfileEdit] = useState(false);

    const { purchasedItems, resetPurchase } = usePurchasedItems();
    console.log(purchasedItems)

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        country: "",
        city: "",
        street: "",
        flat_num: "",
        zip_code: "",
    })

    async function fetchUserData() {
        try {
            const session = await getSession();
            const { id } = session.user;
            const response = await fetch(`http://localhost:3000/api/user-settings/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            if (data) {
                setUser(data.user);
            } else {
                throw new Error("User data not found");
            }

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSave = async (e) => {
        e.preventDefault();
        setAddressEditing(false);
        setPswEdit(false);
        setProfileEdit(false);

        try {
            const session = await getSession();
            const { id } = session.user;
            const response = await fetch(`http://localhost:3000/api/user-settings/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            const updatedUser = await response.json();
            setUser(updatedUser);
            console.log("User succesfully updated");
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update profile');
        }
    };

    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: '/login' });
    };

    return (
        <>
            <Navbar />
            <section className="bg-white py-8 antialiased md:py-16">
                <div className="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
                    <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
                    <form onSubmit={handleSave} className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="flex flex-row gap-x-6 items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Personal details</h2>
                            <svg width="36" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.6819 16.3636C30.6819 18.5335 29.8199 20.6146 28.2855 22.149C26.7511 23.6834 24.67 24.5454 22.5001 24.5454C20.3301 24.5454 18.249 23.6834 16.7146 22.149C15.1802 20.6146 14.3182 18.5335 14.3182 16.3636C14.3182 14.1936 15.1802 12.1125 16.7146 10.5782C18.249 9.04377 20.3301 8.18176 22.5001 8.18176C24.67 8.18176 26.7511 9.04377 28.2855 10.5782C29.8199 12.1125 30.6819 14.1936 30.6819 16.3636ZM26.591 16.3636C26.591 17.4486 26.16 18.4891 25.3928 19.2563C24.6256 20.0235 23.585 20.4545 22.5001 20.4545C21.4151 20.4545 20.3745 20.0235 19.6073 19.2563C18.8402 18.4891 18.4091 17.4486 18.4091 16.3636C18.4091 15.2786 18.8402 14.2381 19.6073 13.4709C20.3745 12.7037 21.4151 12.2727 22.5001 12.2727C23.585 12.2727 24.6256 12.7037 25.3928 13.4709C26.16 14.2381 26.591 15.2786 26.591 16.3636Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.5 0C10.0739 0 0 10.0739 0 22.5C0 34.9261 10.0739 45 22.5 45C34.9261 45 45 34.9261 45 22.5C45 10.0739 34.9261 0 22.5 0ZM4.09091 22.5C4.09091 26.775 5.54932 30.7105 7.99364 33.8359C9.71025 31.5816 11.9248 29.7547 14.4643 28.4979C17.0038 27.2411 19.7995 26.5884 22.633 26.5909C25.4298 26.5883 28.1903 27.224 30.7042 28.4498C33.2181 29.6755 35.419 31.4589 37.1393 33.6641C38.9116 31.3396 40.1049 28.6266 40.6205 25.7494C41.136 22.8722 40.9591 19.9136 40.1042 17.1184C39.2493 14.3232 37.7411 11.7717 35.7044 9.67508C33.6677 7.57846 31.161 5.99699 28.3917 5.0615C25.6224 4.126 22.6702 3.8634 19.7793 4.2954C16.8883 4.7274 14.1418 5.8416 11.767 7.54579C9.39221 9.24999 7.45734 11.4952 6.12251 14.0956C4.78769 16.6961 4.09128 19.577 4.09091 22.5ZM22.5 40.9091C18.274 40.9154 14.1755 39.4616 10.8982 36.7936C12.2174 34.9051 13.9732 33.3632 16.0163 32.2991C18.0594 31.235 20.3293 30.6802 22.633 30.6818C24.9078 30.68 27.1503 31.2209 29.1742 32.2597C31.198 33.2985 32.9448 34.8052 34.2695 36.6545C30.9667 39.4092 26.8007 40.9151 22.5 40.9091Z" fill="black" />
                            </svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="flex flex-col gap-y-3"><label className="text-lg font-medium text-gray-900">First name</label>
                                <input
                                    type="text"
                                    value={user.first_name || ''}
                                    onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                                    readOnly={!profileEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${profileEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                /></div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Last name</label>
                                <input
                                    type="text"
                                    value={user.last_name || ''}
                                    onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                                    readOnly={!profileEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${profileEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Email</label>
                                <input
                                    type="email"
                                    value={user.email || ''}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    readOnly={!profileEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${profileEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Phone number</label>
                                <input
                                    type="tel"
                                    value={user.phone_number || ''}
                                    onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                    readOnly={!profileEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${profileEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>

                        </div>
                        {!profileEdit ? <button
                            onClick={() => setProfileEdit(true)}
                            className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                        >
                            Edit profile
                        </button>
                            : <><button
                                type="submit"
                                className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                            >
                                Confirm Changes
                            </button>
                                <button
                                    onClick={() => setProfileEdit(false)}
                                    className="self-start mt-6 ml-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                                >
                                    Cancel
                                </button></>
                        }
                        {/* {isModalOpen === "Edit" && <EditModal closeMd={closeModal} userData={user}
                            onSave={handleEditSave} />} */}
                    </form>
                    <div className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm md:p-6">
                        <div className="flex flex-row gap-x-6 items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Purchase history</h2>
                            <Image width={36} height={36} src={"/purchaseHistory.png"} alt="Purchase history image" />
                        </div>
                        {purchasedItems.length > 0 && purchasedItems != null ? (
                            purchasedItems.map((item, index) => (
                                <div key={index} className="flex items-center mb-6">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                                    />
                                    <div className="w-full rounded-lg border border-gray-200 ml-6 bg-white p-4 shadow-sm md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <Link href={`/products/product-overview/${item.id}`} className="shrink-0 md:order-1">
                                                <img
                                                    className="h-20 w-20"
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                />
                                            </Link>
                                            {/* <div className="text-end md:order-4 md:w-32">
                                                <h3 className="font-medium text-gray-900 dark:text-white">Purchase Date: {item.purchaseDate}</h3>
                                            </div> */}

                                            <div className="flex items-center justify-between flex-row md:order-3 md:justify-end">
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900">Quantity: {item.quantity}</p>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900">${item.price * item.quantity}</p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 mr-auto ml-6 space-y-4 md:order-2 md:max-w-md">
                                                <Link href={`/products/product-overview/${item.id}`} className="text-base font-medium text-gray-900 hover:underline">
                                                    {item.name}
                                                </Link>
                                                <p className="text-sm text-gray-500">{item.specs}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mb-5">No purchases yet.</p>
                        )}
                        <div className="flex flex-row justify-end">
                            <div className="mt-6 mr-4">
                                {purchasedItems.length > 0 && <button onClick={() => resetPurchase()} className="inline-flex items-center border box-border border-gray-700 rounded-lg bg-transparent px-5 py-2.5 text-sm font-medium text-black hover:bg-blue-800 hover:text-white hover:border-inherit focus:ring-4 focus:ring-blue-300 duration-200">Clear</button>}
                            </div>
                            <div className="mt-6 mr-4">
                                {purchasedItems.length > 0 && <button className="inline-flex items-center rounded-lg bg-blue-card px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-200">Return</button>}
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSave} className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="flex flex-row items-center gap-x-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Address</h2>
                            <svg width={36} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="flex flex-col gap-y-3">
                                <label htmlFor="countries" className="text-lg font-medium text-gray-900">
                                    Choose a country
                                </label>
                                <select
                                    id="countries"
                                    value={user.country || ''}
                                    onChange={(e) => setUser({ ...user, country: e.target.value })}
                                    disabled={!isAddressEditing}
                                    className="block w-full px-4 py-3 text-gray-900 bg-gray-100 border border-gray-300 transition duration-200 ease-in-out text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select an option</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="PL">Poland</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">City</label>
                                <input
                                    type="text"
                                    value={user.city || ''}
                                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                                    readOnly={!isAddressEditing}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${isAddressEditing && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Street</label>
                                <input
                                    type="text"
                                    value={user.street || ''}
                                    onChange={(e) => setUser({ ...user, street: e.target.value })}
                                    readOnly={!isAddressEditing}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${isAddressEditing && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Flat number</label>
                                <input
                                    type="number"
                                    value={user.flat_num || ''}
                                    onChange={(e) => setUser({ ...user, flatNum: e.target.value })}
                                    readOnly={!isAddressEditing}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${isAddressEditing && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">Zip-code</label>
                                <input
                                    type="number"
                                    value={user.zip_code || ''}
                                    onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
                                    readOnly={!isAddressEditing}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${isAddressEditing && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>

                        </div>
                        {!isAddressEditing ? <button
                            onClick={() => setAddressEditing(true)}
                            className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                        >
                            Change address
                        </button>
                            : <><button
                                type="submit"
                                className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                            >
                                Confirm Changes
                            </button>
                                <button
                                    onClick={() => setAddressEditing(false)}
                                    className="self-start mt-6 ml-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                                >
                                    Cancel
                                </button></>
                        }

                    </form>
                    <form onSubmit={handleSave} className="rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="flex flex-row items-center gap-x-6 mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Change password</h2>
                            <svg width={36} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" /></svg>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div className="flex flex-col gap-y-3"><label className="text-lg font-medium text-gray-900">Current password</label>
                                <input
                                    type="password"
                                    value={user.password || ''}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    readOnly={!pswEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${pswEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                /></div>
                            {pswEdit && <><div className="flex flex-col gap-y-3">
                                <label className="text-lg font-medium text-gray-900">New password</label>
                                <input
                                    type="password"
                                    value={user.password || ''}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    readOnly={!pswEdit}
                                    className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${pswEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                />
                            </div>
                                <div className="flex flex-col gap-y-3">
                                    <label className="text-lg font-medium text-gray-900">Confirm password</label>
                                    <input
                                        type="password"
                                        value={user.password || ''}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                        readOnly={!pswEdit}
                                        className={`block w-full px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md ${pswEdit && "bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500"} transition duration-200 ease-in-out`}
                                    />
                                </div></>}
                        </div>
                        {!pswEdit ? <button
                            onClick={() => setPswEdit(true)}
                            className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                        >
                            Change password
                        </button>
                            : <><button
                                type="submit"
                                className="self-start mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                            >
                                Confirm Changes
                            </button>
                                <button
                                    onClick={() => setPswEdit(false)}
                                    className="self-start mt-6 ml-4 inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 duration-200"
                                >
                                    Cancel
                                </button></>
                        }

                    </form>
                    <div className="flex flex-row">
                        <div className="w-full rounded-lg border border-gray-200 bg-white mt-6 p-4 mr-6 shadow-sm md:p-6">
                            <div className="flex flex-row items-center gap-x-6 mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Log out</h2>
                                <svg width={36} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                            </div>
                            <button onClick={handleLogout} className="inline-flex items-center rounded-lg bg-blue-card px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-200 whitespace-nowrap">Log out</button>
                        </div>
                        <div className="w-full rounded-lg border border-gray-200 bg-white mt-6 p-4 shadow-sm md:p-6">
                            <div className="flex flex-row items-center gap-x-6 mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl text-center">Delete account</h2>
                                <svg width="36" height="40" viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 384C0 419.3 28.7 448 64 448L370.7 448C387.7 448 404 441.3 416 429.3L566.6 278.6C572.6 272.6 576 264.5 576 256C576 247.5 572.6 239.4 566.6 233.4L416 82.7C404 70.7 387.7 64 370.7 64L64 64C28.7 64 0 92.7 0 128V384ZM305 337C295.6 346.4 280.4 346.4 271.1 337L224.1 290L177.1 337C167.7 346.4 152.5 346.4 143.2 337C133.9 327.6 133.8 312.4 143.2 303.1L190.2 256.1L143.2 209.1C133.8 199.7 133.8 184.5 143.2 175.2C152.6 165.9 167.8 165.8 177.1 175.2L224.1 222.2L271.1 175.2C280.5 165.8 295.7 165.8 305 175.2C314.3 184.6 314.4 199.8 305 209.1L258 256.1L305 303.1C314.4 312.5 314.4 327.7 305 337Z" fill="black" />
                                </svg>
                            </div>
                            <button onClick={() => setModalOpen(true)} className="inline-flex items-center rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-blue-300 duration-200 whitespace-nowrap">Delete</button>
                            {isModalOpen && <DeleteModal closeModal={() => setModalOpen(false)} />}
                        </div>
                    </div>
                </div>
            </section>
            <Footer1 />
        </>
    )
}