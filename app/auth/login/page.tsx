import { FaSignInAlt } from "react-icons/fa"; // Import the icon
import { FaCheckCircle, FaEdit, FaUser } from 'react-icons/fa';  // Add these imports at the top

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-orange-200">
      <div className="flex flex-wrap w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-2/3 px-6 bg-cover bg-center flex flex-col justify-between min-h-full" 
             style={{ backgroundImage: 'url(/images/login-bg2.jpg)' }}>
          {/* Top content */}
          <div className="text-white bg-opacity-80 px-6 pt-6">
            <img 
              src="/images/ummaup.png" 
              alt="Logo" 
              className="mb-4 w-32 brightness-0 invert"
            />
            <h1 className="text-3xl font-bold mb-4">Welcome to UmmaUp</h1>
          </div>

          {/* Bottom stats */}
          <div className="text-white bg-opacity-80 px-6 pb-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center fun-box">
                <FaCheckCircle className="text-3xl text-gray-100 mb-2 mx-auto" />
                <h6 className="text-sm">Registered People</h6>
                <p className="font-bold">1,01,242</p>
              </div>
              <div className="text-center fun-box">
                <FaEdit className="text-3xl text-gray-100 mb-2 mx-auto" />
                <h6 className="text-sm">Posts Published</h6>
                <p className="font-bold">21,03,245</p>
              </div>
              <div className="text-center fun-box">
                <FaUser className="text-3xl text-gray-100 mb-2 mx-auto" />
                <h6 className="text-sm">Online Users</h6>
                <p className="font-bold">40,145</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 p-8 bg-[#fa6342]"> 
          <div className="form-title flex items-center space-x-2">
            <FaSignInAlt className="text-white text-sm font-normal" />
            <span className="text-lg font-semibold text-white">Sign In</span>
          </div>
          <p className="text-sm mb-6 text-white">
            Sign in now and meet the awesome friends around the world.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-white">Remember Me</label>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="w-20 bg-white text-blue-500 py-1 text-sm rounded-md hover:bg-gray-600"
              >
                Sign In
              </button>
              <a
                href="#"
                className="block text-sm text-blue-600 hover:underline mt-4"
              >
                Forgot password?
              </a>
            </div>
          </form>

          
          <p className="text-sm text-center mt-4 text-white">
            Don't have an account?{" "}
            <a href="#" className="hover:underline text-blue-600">
              Register now
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
