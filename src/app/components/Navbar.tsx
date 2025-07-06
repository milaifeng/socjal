import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-24 p-4">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[30%]">
        <Link href="/" className="font-bold text-xl text-blue-500">LAMASOCIAL</Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="HomePage" width={16} height={16} className="w-4 h-4" />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="Friends" width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Stories" width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex items-center p-2 rounded-xl bg-gray-100 hover:bg-gray-200 ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="Search" width={14} height={14} className="w-4 h-4" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[20%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </ClerkLoading>
        <SignedIn>
          <div className="cursor-pointer">
            <Image src="/people.png" alt="" width={20} height={20} />
          </div>
          <div className="cursor-pointer">
            <Image src="/messages.png" alt="" width={20} height={20} />
          </div>
          <div className="cursor-pointer">
            <Image src="/notifications.png" alt="" width={20} height={20} />
          </div>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-2 text-sm p-2">
            <Image src="/login.png" alt="" width={20} height={20} />
            <Link href="/sign-in">Login</Link>
          </div>
        </SignedOut>
        <MobileMenu />
      </div>
    </div>
  );
}