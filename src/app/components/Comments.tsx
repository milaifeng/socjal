import Image from "next/image";
export default function Comments() {
  return (
    <div className=" bg-white flex flex-col gap-4">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image src="/noCover.png" alt="User Avatar" width={32} height={32}
          className="w-8 h-8 rounded-full" />
        <div className="flex flex-1 justify-between items-center bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input type="text" className="bg-transparent outline-none flex-1" placeholder="Write a comment..." />
          <Image src="/emoji.png" alt="User Avatar" width={16} height={16}
            className="cursor-pointer" />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <div>
            <Image src="/noCover.png" alt="User Avatar" width={40} height={40}
              className="w-10 h-10 rounded-full" />

          </div>
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-semibold">John Doe</span>
            <p className="">
              This is a comment on the post. It provides feedback or additional information.
              This is a comment on the post. It provides feedback or additional information.
              This is a comment on the post. It provides feedback or additional information.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className=" flex items-center gap-2">
                <Image src="/like.png" alt="Like" width={12} height={12}
                  className="cursor-pointer w-4 h-4" />
              </div>
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-gray-500 text-sm">123 Likes</span>
              <div className="font-semibold">
                Reply
              </div>
            </div>
          </div>
          {/* ICON */}
          <Image src="/more.png" alt="More Options" width={16} height={16}
            className="cursor-pointer w-4 h-4" />
        </div>

      </div>
    </div>
  );
}