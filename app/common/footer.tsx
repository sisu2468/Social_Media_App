import Image from "next/image";

const Footer = () => {
    return (
        <div className="h-[63px] bg-gray-200 py-5 z-40 relative w-screen">
            <div className="mx-[230px]">
                <div className="flex items-center justify-between mx-auto ">
                    <span>© Uamaup 2024. All rights reserved.</span>
                    <Image 
                        src="/credit-cards.png" 
                        alt="Fotter Credit-Card" 
                        width={79}
                        height={23}
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;