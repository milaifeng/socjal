import Feed from "@/app/components/Feed";
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="/noCover.png" alt="" fill className="object-cover" />
              <Image src="/hat_dog.png" alt="" width={128} height={128} className="w-32 h-32 rounded-full absolute right-0 left-0 m-auto -bottom-16 ring-4 ring-white object-cover" />
            </div>
            <h1 className="text-xl font-semibold mt-20 mb-4">Elva Weaver</h1>
            <div className="flex items-center gap-6 justify-center">
              <div className="flex flex-col items-center">
                <span className="font-medium">142</span>
                <span className="text-gray-500 text-xs">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-gray-500 text-xs">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.4K</span>
                <span className="text-gray-500 text-xs">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}