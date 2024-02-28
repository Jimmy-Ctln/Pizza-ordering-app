"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import avatar from "../../../public/homme.png";
import { useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState(session?.data?.user?.name || '')

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault()
    const response = await fetch('/api/profile', {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name:userName})
    })
  }

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const userImage = session.data.user.image || avatar;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
                <Image
                  className="rounded-lg w-full h-full mb-2"
                  src={userImage}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt={"Avatar"}
                />
              <button type="button">Edit</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input type="text" placeholder="First and last name" onChange={ev => setUserName(ev.target.value)} value={userName} />
            <input type="email" disabled={true} value={session.data.user.email}/>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
