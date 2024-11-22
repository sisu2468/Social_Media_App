type DataFormProps = {
    type: boolean;
}
export default function DataForm ({type} : DataFormProps) {
    return (
        <div className="mb-[30px]">
            <div className="mb-3">
                <div className="flex items-center justify-center">
                    <input type="text" placeholder="Email" className="mb-2 px-5 py-3 h-12 rounded-3xl text-xs w-full"></input>
                </div>
                <div className="flex items-center justify-center">
                    <input type="password" placeholder="Password" className="mb-2 px-5 py-3 h-12 rounded-3xl text-xs w-full"></input>
                </div>
                {!type && 
                    <div className="flex items-center justify-center">
                        <input type="number" placeholder="+1234-567-987" className="px-5 py-3 h-12 rounded-3xl text-xs w-full"></input>
                    </div>
                }
            </div>
            <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm text-white capitalize">{!type ? 'Send Code To Mobile' : 'Remember Me'}</label>
            </div>
            <div className="mt-[30px] flex justify-between items-center">
                <button className="px-5 py-2.5 bg-white rounded-3xl font-normal capitalize text-[#474962] cursor-pointer text-sm">{!type ? 'Sign Up' : 'Sign In'}</button>
                <span className="text-xs text-white cursor-pointer hover:underline">Forget Password?</span>
            </div>
        </div>
    )
}