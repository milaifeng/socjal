import Image from "next/image";
import Link from "next/link";

export default function FriendRequests() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/noCover.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold">TIMI</span>
        </div>
        <div className="flex gap-3  justify-end">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/noCover.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold">TIMI</span>
        </div>
        <div className="flex gap-3  justify-end">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/noCover.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold">TIMI</span>
        </div>
        <div className="flex gap-3  justify-end">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}