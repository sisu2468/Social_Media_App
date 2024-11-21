import Image from 'next/image'

const OtherPerson = ({ selected, status }: { selected: boolean; status: string }) => {
  const statusColor = {
    Online: '#7FBA00', // Green
    Away: '#ffd300',   // Yellow
    Offline: '#bebebe' // Gray
  }[status];
  
  return (
    <div className="relative flex items-center justify-center cursor-pointer group">
      <div className='flex relative'>
        {/* Pseudo-element for hover effect */}
        <div className="absolute inset-0 rounded-full transition-all duration-300 group-hover:ring-2 group-hover:ring-gray-300"></div>
            <div className='flex items-center gap-0.5'>
                {selected && (
                <span
                    className="w-2.5 h-2.5 top-3 rounded-full text-white font-semibold flex items-center justify-center bg-[#7FBA00]"
                >
                    -
                </span>
                )}
                <Image
                    src="/resources/side-friend2.jpg"
                    alt="Friend Avatar"
                    width={34}
                    height={34}
                    className="rounded-full"
                />
            </div>
        
            
            <span
            className="absolute w-2.5 h-2.5 bottom-0 right-0 rounded-full text-white font-semibold flex items-center justify-center"
            style={{ backgroundColor: statusColor }}
            >
            -
            </span>
      </div>
    </div>
  );
}

export default OtherPerson;