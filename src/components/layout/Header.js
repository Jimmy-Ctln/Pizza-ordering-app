"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user
  let userName = userData?.name || userData?.email
  if(userName && userName.includes(' ')) {
    userName=userName.split(' ')[0]
  }

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-400 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href={"/"}>
          ST PIZZA
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500">
        {status === "authenticated" && (
          <>
            <Link href={"profile"}>{userName}</Link>
            <button
              onClick={() => signOut()}
              className="bg-primary text-white px-8 py-2 rounded-full"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"} className="px-6 py-2 rounded-full">
              Login
            </Link>
            <Link
              href={"/register"}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
