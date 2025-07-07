import Image from "next/image";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-semibold">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="..." width={16} height={16} className="w-4 h-4 cursor-pointer" />
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
          <Image src="/noCover.png" alt="..." fill className="rounded-lg object-cover" />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/noCover.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-semibold">BigChef Lounge</span>
        </div>
        <p className={`text-gray-500 ${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm" ? "Lorem dolor sit amet consectetur adipisicing elit."
            : size === "md"
              ? "Lorem dolor sit amet consectetur adipisicing elit. Lorem dolor sit amet consectetur adipisicing elit."
              : "Lorem dolor sit amet consectetur adipisicing elit. Lorem dolor sit amet consectetur adipisicing elit. Lorem dolor sit amet consectetur adipisicing elit."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
      </div>
    </div>
  )
}
