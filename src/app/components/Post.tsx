import Image from "next/image";
import Comments from "./Comments";
export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex gap-4 items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image src="/noCover.png" alt="User Avatar" width={40} height={40}
            className="w-10 h-10 rounded-full" />
          <span className="font-semibold">John Doe</span>
        </div>
        <Image src="/more.png" alt="More Options" width={16} height={16}
          className="w-4 h-4 rounded-full cursor-pointer" />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image src="/noCover.png" alt="Post Image" fill className="object-cover rounded-md" />
        </div>
        <p>
          This is a description of the post. It provides more details about the content.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/like.png" alt="Like Image" width={18} height={18} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="text-gray-500 hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/comment.png" alt="Comment Image" width={18} height={18} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="text-gray-500 hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src="/share.png" alt="Share Image" width={18} height={18} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="text-gray-500 hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>

      </div>
      {/* COMMENTS */}
      <Comments />
    </div>
  )
}