import OtherPerson from "./otherperson";

const RightSideBar = () => {
    return (
        <div className="w-[70px] fixed py-[30px] z-10 h-screen right-0 left-auto flex flex-col gap-5 items-center bg-white top-12">
            <OtherPerson selected={true} status="Away" />
            <OtherPerson selected={false} status="Online" />
            <OtherPerson selected={false} status="Offline" />
            <OtherPerson selected={false} status="Online" />
            <OtherPerson selected={false} status="Online" />
            <OtherPerson selected={false} status="Offline" />
            <OtherPerson selected={false} status="Online" />
            <OtherPerson selected={false} status="Away" />
            <OtherPerson selected={false} status="Away" />
            <OtherPerson selected={false} status="Online" />
            
        </div>
    )
}

export default RightSideBar;