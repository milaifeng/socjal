import Link from "next/link";
import Image from "next/image";
export default function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Me</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap mb-1">
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="/noCover.png" alt="" fill className="object-cover rounded-md" />
        </div>
      </div>
    </div>
  )
}