import Image from 'next/image';
export default function ProfileCard() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image src="/noCover.png" alt="" fill className="rounded-md object-cover" />
        <Image src="/hat_dog.png" alt="" width={48} height={48} className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-2 ring-white z-10" />
      </div>
      <div className='flex flex-col items-center gap-4 h-15'>
        <span className='font-semibold'> Edward Gabriel May</span>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <Image src="/hat_dog.png" alt="" width={16} height={16} className="w-8 h-8 rounded-full object-cover" />
            <Image src="/noCover.png" alt="" width={16} height={16} className="w-8 h-8 rounded-full object-cover" />
            <Image src="/noCover.png" alt="" width={16} height={16} className="w-8 h-8 rounded-full object-cover" />
          </div>
          <span className='text-xs text-gray-500'>500 Followers</span>
        </div>
      </div>
      <button className='bg-blue-500 text-white rounded-md p-2 text-xs'>My Profile</button>
    </div>
  )
}