import PSWISEAI_Chat from "../component/AI-ChatBot/page";
import Footer1 from "../component/footer";
import Navbar from "../component/navBar";
import AIChatBtn from "../component/ui/aiChatBtn";

export default function Support() {
    return (
        <>
            <Navbar />
            <section className="px-10">
                <div className="flex justify-center bg-blue-linear-gradient shadow-md rounded-3xl max-w-5xl m-auto mt-6 mb-24">
                    <div className="p-6 flex items-center gap-x-20">
                        <div className="block">
                            <h2 className="mb-5 text-4xl font-bold text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                                Support
                            </h2>
                            <p className="text-base text-text-alternative md:text-md">Find additional FAQs and submit your question</p>
                        </div>
                        <img src="./support.png" className="w-64 mr-6" alt="Image of PC" />
                    </div>
                </div>

                <div className="flex items-start justify-center">
                    <div className="flex flex-col">
                        <div className="">
                            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Hours of Operation</h2>
                            <div className="right-0 w-40 h-1 mr-auto my-4 bg-blue-card border-0 rounded md:mb-10"></div>
                        </div>
                        <div className="mb-6">
                            <div className=""><h6><strong>Phone Hours</strong></h6>
                                <p>Mon - Fri: 9am - 6pm Eastern<br />Sat: 10am - 1pm Eastern</p></div>
                        </div>
                        <div className="">
                            <div className=""><h6><strong>Walk-in Hours</strong></h6>
                                <p>Mon - Fri: 10:00 am - 4:30 EST<br />(Off-hour accommodation may be available upon request)</p></div>
                        </div>
                    </div>
                    <form className="max-w-sm ml-44">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
                        </div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                        <button type="submit" className="inline-flex items-center rounded-lg bg-blue-card my-5 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 duration-200">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="relative w-full bg-white px-6 pt-10 pb-8 my-16 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
                    <div className="mx-auto px-5">
                        <div className="flex flex-col items-center">
                            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                            <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

                            </p>
                        </div>
                        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> How does the billing work?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Springerdata offers a variety of
                                        billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                        pricing for certain services. Payment is typically made through a credit card or other
                                        secure online payment method.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> Can I get a refund for my subscription?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a 30-day money-back
                                        guarantee for most of its subscription plans. If you are not satisfied with your
                                        subscription within the first 30 days, you can request a full refund. Refunds for
                                        subscriptions that have been active for longer than 30 days may be considered on a
                                        case-by-case basis.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group" open="">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> How do I cancel my subscription?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">To cancel your subscription, you can
                                        log in to your account and navigate to the subscription management page. From there, you
                                        should be able to cancel your subscription and stop future billing.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> Is there a free trial?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We offer a free trial of our software
                                        for a limited time. During the trial period, you will have access to a limited set of
                                        features and functionality, but you will not be charged.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> How do I contact support?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">If you need help with our platform or
                                        have any other questions, you can contact the company's support team by submitting a support
                                        request through the website or by emailing support@ourwebsite.com.
                                    </p>
                                </details>
                            </div>
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span> Do you offer any discounts or promotions?</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We may offer discounts or promotions
                                        from time to time. To stay up-to-date on the latest deals and special offers, you can sign
                                        up for the company's newsletter or follow it on social media.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AIChatBtn />
            <PSWISEAI_Chat />
            <Footer1 />
        </>
    )
}