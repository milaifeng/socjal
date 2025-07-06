import Image from "next/image"
export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/noCover.png" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image src="/globe.svg" alt="Story" height={80} width={80} className="w-20 h-20 rounded-full ring-2" />
          <span className="font-medium">Name</span>
        </div>
      </div>
    </div>
  )
}