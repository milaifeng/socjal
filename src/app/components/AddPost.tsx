import Image from "next/image"
export default function AddPost() {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-md gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image src="/noCover.png" alt="User Avatar" width={50} height={50}
        className="w-12 h-12 object-cover rounded-full" />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4 ">
          <textarea
            placeholder="What's on your mind?"
            className="bg-slate-100 flex-1 rounded-lg resize-none p-2"
          />
          <Image src="/emoji.png" alt="Emoji" width={20} height={20}
            className="w-5 h-5 cursor-pointer self-end" />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="Photo" width={20} height={20} />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="Video" width={20} height={20} />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="Poll" width={20} height={20} />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="Event" width={20} height={20} />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  )
}