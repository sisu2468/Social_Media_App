import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

type SignFunBoxProps = {
    iconurl: string;
    title: string,
    member: number;
};
const formatnumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
}
const FunBox = ({ iconurl, title, member }: SignFunBoxProps) => {
    return (
        <div className="px-4 w-40">
            <div className="mb-2.5">
                <div className="flex bg-[#1484CC] w-10 h-10 rounded-full items-center justify-center">
                    <Image
                        src={iconurl}
                        alt="FunIconBox"
                        width={20}
                        height={20}
                        className="inset-0 invert object-cover"
                    />
                </div>
            </div>
            <h3 className="mb-2 text-[#535165] text-sm font-medium">{title}</h3>
            <span className="text-[15px] text-[#474962]">{formatnumber(member)}</span>
        </div>
    );
};

export default FunBox;
