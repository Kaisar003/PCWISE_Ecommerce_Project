import Link from "next/link";

export default function Category() {
    return (
        <div className="flex-column inline gap-x-8 justify-center py-32 text-slate-50">
            <div className="flex container flex-column content-center justify-center mt-24">
                <div className=" flex items-center justify-center m-6 mt-0 bg-blue-card shadow-md rounded-3xl w-80 h-64">
                    <div className="p-6">
                        <Link href={"/products"} className="mb-2 cursor-pointer text-center text-4xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                            Pre-build PC's
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center m-6 mt-0 bg-blue-card shadow-md rounded-3xl w-80 h-64">
                    <div className="p-6">
                        <Link href={"/products"} className="mb-2 cursor-pointer text-center text-4xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                            Laptops
                        </Link>
                    </div>
                </div>
                <div className=" flex items-center justify-center m-6 mt-0 bg-blue-card shadow-md rounded-3xl w-80 h-64">
                    <div className="p-6">
                        <Link href={"/products"} className="mb-2 cursor-pointer text-center text-4xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                            Acessories
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center bg-blue-linear-gradient shadow-md rounded-3xl max-w-5xl m-auto mt-6 mb-24">
                <div className="p-6 flex items-center">
                    <img src="./PC_card.png" className="w-64 mr-6" alt="Image of PC" />
                    <div className="block">
                        <h5 className="mb-4 text-center text-5xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                            Build your custom PC!
                        </h5>
                        <Link href={"/custom_PC"} className="bg-blue-card hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 focus:outline-none duration-200">Build</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}