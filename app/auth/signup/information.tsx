import DataForm from "@/app/common/sign/data-form";
import NohaveSignup from "@/app/common/sign/nohave-signup";
import ServiceLogin from "@/app/common/sign/service-login";

export default function Information() {
    return (
        <div className="w-[350px]">
            {/* Main content container */}
            <div className="bg-[#1484CC] px-14 py-12 rounded-t-xl	">
                <div className="w-60">
                    <div className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5 inset-0 invert object-cover svg-inline--fa fa-right-to-bracket" aria-hidden="true" focusable="false" data-prefix="fa-regular" data-icon="right-to-bracket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M512 128v256c0 53.02-42.98 96-96 96h-72C330.7 480 320 469.3 320 456c0-13.26 10.75-24 24-24H416c26.4 0 48-21.6 48-48V128c0-26.4-21.6-48-48-48h-72C330.7 80 320 69.25 320 56C320 42.74 330.7 32 344 32H416C469 32 512 74.98 512 128zM367.9 273.9L215.5 407.6C209.3 413.1 201.3 416 193.3 416c-4.688 0-9.406-.9687-13.84-2.969C167.6 407.7 160 396.1 160 383.3V328H40C17.94 328 0 310.1 0 288V224c0-22.06 17.94-40 40-40H160V128.7c0-12.75 7.625-24.41 19.41-29.72C191.5 93.56 205.7 95.69 215.5 104.4l152.4 133.6C373.1 242.6 376 249.1 376 256S373.1 269.4 367.9 273.9zM315.8 256L208 161.1V232h-160v48h160v70.03L315.8 256z"></path></svg>
                        <span className="text-xl font-medium text-white">Sign Up</span>
                    </div>
                    <div className="mt-4 flex items-center text-center py-5 border-t-[1px] border-[#ffffff1a]">
                        <span className="items-center align-middle text-[13px] text-[#efefef] font-normal">Sign Up now and meet the awesome friends around the world.</span>
                    </div>
                    <DataForm type={false} />
                    <ServiceLogin />
                    <NohaveSignup type={false} />
                </div>
            </div>
            {/* Triangle shape */}
            <div className="w-0 h-0 border-l-[175px] border-r-[175px] border-t-[50px] border-l-transparent border-r-transparent border-t-[#1484CC]" />
        </div>
    )
}