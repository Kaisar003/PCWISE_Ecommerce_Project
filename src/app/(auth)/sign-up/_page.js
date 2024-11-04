"use client"
import PasswordInput from "@/app/component/auth/psw-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// const isValidEmail =(email)=>{
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         return emailRegex.test(email);
// }

export default function SignUp() {
    const router = useRouter();

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

    const [loading, setLoading] = useState(false)

    const onSignUp = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3000/api/users/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error during sign up:", errorData);
                return;
            }
            const data = await response.json();

            console.log("Succesfully signed up", data);
            router.push("/");
        } catch (error) {
            console.error("Error during sign up:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center">
                Sign Up
            </h1>
            <div className="space-y-4 md:space-y-6">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" value={user.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required=""
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <PasswordInput value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="name" value={user.first_name} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your name" required=""
                        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                    <input type="name" value={user.last_name} name="lname" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your last name" required=""
                        onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
                </div>
                <p className="text-xs font-light text-gray-500">By creating an account, you accept our <a href="" className="font-medium text-link-color hover:underline">Terms of use</a>. Find out how we handle your data on our website. <a href="" className="font-medium text-link-color hover:underline">Privacy Policy</a>.</p>
                {loading ? <div role="status" className="flex justify-center">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div> : <button onClick={onSignUp} className="w-full text-white bg-blue-card hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200">Register</button>}
                <p className="text-sm font-light text-gray-500">
                    Already have an account? <Link href="/login" className="font-medium text-link-color hover:underline">Sign in</Link>
                </p>
            </div>
        </>
    )
}