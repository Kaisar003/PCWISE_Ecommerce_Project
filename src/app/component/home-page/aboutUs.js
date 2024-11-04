import Image from "next/image"
export default function About() {
    return (
        <section>
            <div className="max-w-full p-5 sm:p-10 md:p-16 text-center">
                <h2 className="font-semibold text-7xl mt-24">About Us</h2>
                <div className="flex items-center flex-col text-2xl font-light text-black">
                    <p className="max-w-6xl my-10">PSWise is a e-commerce platform founded by a team of passionate tech enthusiasts with a shared vision: to simplify
                        and enhance the process of building and customizing personal computers. Our mission is to provide an intuitive,
                        seamless, and personalized PC building experience for everyone, whether you're a seasoned expert or a first-time builder.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-10">
                        <div className="flex flex-col items-center bg-white shadow-md rounded-3xl max-w-sm dark:bg-gray-800 dark:border-gray-700 p-10">
                            <h4 className="font-semibold text-4xl">Free shipping</h4>
                            <p className="text-lg">on all gaming PCs&Laptops.</p>
                            <Image className="mt-10" width={125} height={125} src="/about-us/Free-shipping.png" alt="Free-shipping van image" />
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md rounded-3xl max-w-sm dark:bg-gray-800 dark:border-gray-700 p-10">
                            <h4 className="font-semibold text-4xl">AI-Assistance</h4>
                            <p className="text-lg">struggling on choosing right PC?<br />Our AI - assistant can assist you.</p>
                            <Image className="mt-10" width={100} height={100} src="/about-us/AI.png" alt="AI-assistant image" />
                        </div>
                        <div className="flex flex-col items-center bg-white shadow-md rounded-3xl max-w-sm dark:bg-gray-800 dark:border-gray-700 p-10">
                            <h4 className="font-semibold text-4xl">High-quality PCs</h4>
                            <p className="text-lg">built by experts, with a 1-year warranty.</p>
                            <Image className="mt-10" width={100} height={100} src="/about-us/Tools.png" alt="Tools image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}