import Image from 'next/image';

const Footer1 = (props) => {
    const {
        logo,
        newsletterDescription,
        inputPlaceholder,
        button,
        termsAndConditions,
        columnLinks,
        footerText,
        footerLinks,
    } = {
        ...Footer1Defaults,
        ...props,
    };

    return (
        <footer className="px-5 py-12 md:py-18 lg:py-20 text-gray-700 bg-white-alternate m-0 text-white-alternate">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr,1fr] lg:gap-y-4 lg:pb-20">
                    <div className="flex flex-col">
                        <a href={logo.url} className="mb-5 md:mb-6 inline-flex">
                            <Image src={logo.src} alt={logo.alt} width={75} height={75} />
                            <p className="flex items-center text-xl">PC<span className="text-second-color">WISE</span></p>
                        </a>
                        <p className="mb-5 md:mb-6">{newsletterDescription}</p>
                        <div className="max-w-md">
                            <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                                <input
                                    type="email"
                                    placeholder={inputPlaceholder}
                                    className="border px-3 py-2"
                                />
                                <button className="btn btn-secondary btn-sm border border-gray-500 py-3 px-4 hover:bg-blue-card hover:text-white hover:border-inherit duration-200">
                                    {button.title}
                                </button>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
                        {columnLinks.map((column, index) => (
                            <div key={index} className="flex flex-col items-start justify-start">
                                <h2 className="mb-3 font-semibold md:mb-4">{column.title}</h2>
                                <ul>
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="py-2 text-sm">
                                            <a href={link.url} className="flex items-center gap-3 focus:outline-none">
                                                {link.icon}
                                                <span>{link.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-px w-full bg-black" />
                <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
                    <p className="mt-6 md:mt-0">{footerText}</p>
                    <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
                        {footerLinks.map((link, index) => (
                            <li key={index} className="underline">
                                <a href={link.url} className="focus:outline-none">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const Footer1Defaults = {
    logo: {
        url: "#",
        src: "/logo.png",
        alt: "Logo image",
    },
    newsletterDescription: "Join our newsletter to stay up to date on features and releases.",
    inputPlaceholder: "Enter your email",
    button: {
        title: "Subscribe",
    },
    termsAndConditions: `
    <p className='text-xs'>
      By subscribing you agree to with our
      <a href='#' className='underline focus:outline-none'>Privacy Policy</a>
      and provide consent to receive updates from our company.
    </p>
  `,
    columnLinks: [
        {
            title: "About Us",
            links: [
                { title: "Company History", url: "#" },
                { title: "Our Team", url: "#" },
                { title: "Careers", url: "#" },
                { title: "Sustainability", url: "#" },
                { title: "Blog", url: "#" },
            ],
        },
        {
            title: "Customer Support",
            links: [
                { title: "Help Center", url: "#" },
                { title: "AI assistant", url: "#" },
                { title: "Returns & Refunds", url: "#" },
                { title: "Shipping Information", url: "#" },
                { title: "Contact us", url: "#" },
            ],
        },
        {
            title: "Follow us",
            links: [
                { title: "Facebook", url: "#", icon: <svg className='w-3.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg> },
                { title: "Instagram", url: "#", icon: <svg className='w-3.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> },
                { title: "X", url: "#", icon: <svg className='w-3.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg> },
                { title: "LinkedIn", url: "#", icon: <svg className='w-3.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg> },
                { title: "Youtube", url: "#", icon: <svg className='w-3.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg> },
            ],
        },
    ],
    footerText: "© 2024 PCWISE. All rights reserved.",
    footerLinks: [
        { title: "Privacy Policy", url: "#" },
        { title: "Terms of Service", url: "#" },
    ],
};

export default Footer1;