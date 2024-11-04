"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = (props) => {
    const { heading, description, buttons, image } = {
        ...Header5Defaults,
        ...props,
    };

    const router = useRouter();
    const handleClick = () => {
        router.push("/products")
    }

    return (
        <section className="relative px-10 text-slate-50">
            <div className="container mx-auto">
                <div className="flex max-h-[60rem] min-h-screen items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-base text-text-alternative md:text-md">{description}</p>
                        <div className="mt-6 flex gap-x-4 md:mt-8">
                            {/* {buttons.map((button, index) => (
                                <button key={index} className={`btn ${button.variant ? 'btn-' + button.variant : ''}`}>
                                    {button.title}
                                </button>
                            ))} */}
                            <button onClick={handleClick} className="bg-blue-card hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-20 py-2.5 focus:outline-none duration-200">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10">
                <img src={image.src} className="w-full h-full object-cover" alt={image.alt} />
                <div className="absolute inset-0 bg-black/50" />
            </div>
        </section>
    );
};

const Header5Defaults = {
    heading: "Upgrade Your Gaming Experience Today!",
    description:
        "Discover the best gaming PCs and accessories designed to take your performance to the next level. Shop our curated selection of high-performance desktops, laptops, and acessories, and build the ultimate gaming setup. Fast shipping and unbeatable customer service await you!",
    buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
    image: {
        src: "./Background-image.png",
        alt: "Pre built gaming PC",
    },
};

export default Hero;