import Image from "next/image"
import Link from "next/link"
export default function Birthdays() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/noCover.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold">TIMI</span>
        </div>
        <div className="flex gap-3  justify-end">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md cursor-pointer">Celebrate</button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} className="w-10 h-10 rounded-full object-cover" />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className=" text-gray-700 font-semibold text-xs">UPcoming Birthdays</span>
          <span className="text-gray-500 text-xs">See other 16 have upcoming birthdays</span>
        </Link>
      </div>
    </div>
  )
}
