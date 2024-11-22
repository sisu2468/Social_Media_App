import FunBox from "@/app/common/sign/fun-box";
import Image from "next/image";
import CollaApps from "@/app/common/sign/colla-apps";

export default function Description() {
    return (
        <div className="px-4 w-[730px]">
            <div className="mb-12">
                <Image
                    src='/images/ummaup.png'
                    alt="Logo"
                    width={160}
                    height={52}
                />
            </div>
            <div className="mb-4">
                <h1 className="text-[#333145] text-[40px] font-normal">Welcome to the Umaup</h1>
            </div>
            <div className="mb-4">
                <p className="text-[#636175] text-sm">Umaup is a social network that can be used to connect people. use this template for multipurpose social activities like job, dating, posting, bloging and much more. Now join & Make Cool Friends around the world !!!</p>
            </div>
            <div className="mt-[30px] flex items-center">
                <FunBox iconurl="/icons/check.png" title="Registered People" member={101242} />
                <FunBox iconurl="/icons/media-overlay.png" title="Posts Published" member={2103245} />
                <FunBox iconurl="/icons/people.png" title="Online Users" member={40145} />
            </div>
            <div className="mt-[50px] flex gap-4">
                <div className="">
                    <Image
                        src="/resources/Barcode.jpg"
                        alt="Barcode"
                        width={100}
                        height={100}
                        className="border-[6px] border-white"
                    />
                </div>
                <div>
                    <div className="mb-5">
                        <span className="text-[#232135] text-xl font-normal">Download Mobile App and Scan QR Code to login</span>
                    </div>
                    <div className="grid grid-cols-3">
                        <CollaApps imageurl="/android.png" imagetext="android" />
                        <CollaApps imageurl="/apple.png" imagetext="iPhone" />
                        <CollaApps imageurl="/windows.png" imagetext="Windows" />
                    </div>
                </div>
            </div>
        </div>
    )
}