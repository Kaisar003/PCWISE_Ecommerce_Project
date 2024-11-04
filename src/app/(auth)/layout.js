import Image from "next/image"
import Link from "next/link"

export default function AuthLayout({ children }) {
    return (
        <main>
            <div className="flex flex-col items-center justify-center mx-auto my-10">
                <Link href="/" className="inline-flex text-black mb-5">
                    <Image src="/logo.png" width={75} height={75} alt="logo image" />
                    <h2 className="flex items-center text-2xl font-black">PC<span className="text-second-color">WISE</span></h2>
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}