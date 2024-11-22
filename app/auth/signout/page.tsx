import { FaSignInAlt } from "react-icons/fa"; // Import the icon
import { FaCheckCircle, FaEdit, FaUser } from 'react-icons/fa';  // Add these imports at the top
import SignInHeader from "@/app/auth/sign-header";
import Image from "next/image";

export default function SignOutPage() {
  return (
    <div>
      <SignInHeader />
      <div>
        <div className="h-[261px] bg-[#484874] relative w-screen border-b-1 border-[#e1e8ed] pt-[50px] px-4 top-[55px]">
          <h2 className="flex items-center justify-center text-[40px] font-normal mb-2.5 text-white capitalize">Now You are out of Pitnik</h2>
          <p className="text-white text-sm flex justify-center">Discover what's happining right now in the world.</p>
          <div className="relative h-24 w-full mt-5 flex justify-center">
            <img src='/resources/baner-forum.png' />
          </div>

        </div>
        <div className="flex items-center justify-center h-screen bg-[#edf2f6]">
          
        </div>
      </div>
    </div>
  );
}
