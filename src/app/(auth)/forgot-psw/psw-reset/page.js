import PasswordInput from "@/app/component/auth/psw-input";

export default function ForgotPsw() {
    return (
        <>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl text-center">
                Password reset
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">New password</label>
                    <PasswordInput />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Confirm the password</label>
                    <PasswordInput />
                </div>
                <button type="submit" className="w-full text-white bg-blue-card hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-200">Reset</button>
            </form>
        </>
    )
}