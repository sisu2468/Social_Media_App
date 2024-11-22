import Image from "next/image"

type CollaAppsProps = {
    imageurl: string;
    imagetext: string;
}
export default function CollaApps({imageurl, imagetext} : CollaAppsProps) {
    return (
        <div className="flex gap-1 cursor-pointer">
            <Image
                src={imageurl}
                alt={imagetext}
                width={20}
                height={20}
            />
            <span className="text-sm text-[#232135] font-medium hover:text-[#fa6342]">{imagetext}</span>
        </div>
    )
}