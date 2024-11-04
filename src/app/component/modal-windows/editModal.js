"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function EditModal({ userData, closeMd, onSave }) {
    const [user, setUser] = useState(userData);
    const { data: session } = useSession();
    const { id } = session.user;
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
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
            onSave(updatedUser);
            router.push(`/user-settings/${id}`);
        } catch (error) {
            console.error('Error updating user data:', error);
            alert('Failed to update profile');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center py-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start flex justify-center items-center">
                                {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z" /></svg>
                                </div> */}
                                <div className="flex flex-col justify-center space-y-3 mt-3 text-center sm:mt-0 sm:text-left">
                                    <h3 className="text-xl font-bold leading-6 text-gray-900" id="modal-title">Edit profile</h3>
                                    <div className="flex justify-center flex-col gap-y-1.5"><label className="text-base font-medium text-gray-900">First name</label>
                                        <input
                                            type="text"
                                            value={user.first_name || ''}
                                            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                                            className={`block w-full px-4 py-2 text-gray-900 border rounded-md bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out`}
                                        /></div>
                                    <div className="flex flex-col gap-y-1.5"><label className="text-base font-medium text-gray-900">Last name</label>
                                        <input
                                            type="text"
                                            value={user.last_name || ''}
                                            onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                                            className={`block w-full px-4 py-2 text-gray-900 border rounded-md bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out`}
                                        /></div>
                                    <div className="flex flex-col gap-y-1.5"><label className="text-base font-medium text-gray-900">Email</label>
                                        <input
                                            type="email"
                                            value={user.email || ''}
                                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            className={`block w-full px-4 py-2 text-gray-900 border rounded-md bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out`}
                                        /></div>
                                    <div className="flex flex-col gap-y-1.5"><label className="text-base font-medium text-gray-900">Phone number</label>
                                        <input
                                            type="tel"
                                            value={user.phoneNumber || ''}
                                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                                            className={`block w-full px-4 py-2 text-gray-900 border rounded-md bg-white border-blue-500 focus:border-blue-500 focus:ring-blue-500 transition duration-200 ease-in-out`}
                                        /></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex justify-center">
                            <button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-card px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 duration-200 sm:w-auto">Confirm changes</button>
                            <button onClick={closeMd} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}