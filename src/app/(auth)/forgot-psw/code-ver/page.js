export default function ForgotPsw() {
    return (
        <>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center">
                Verify the code!
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900">Code verification</label>
                    <input type="text" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="code" required="" />
                </div>
                <p className="text-xs font-light text-gray-500">Enter the code that we send to your email address.</p>
                <button type="submit" className="w-full text-white bg-blue-card hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200">Verify</button>
                <p className="text-sm font-light text-gray-500">
                    Send <a href="/login" className="font-medium text-link-color hover:underline">Again</a>?
                </p>
            </form>
        </>
    )
}