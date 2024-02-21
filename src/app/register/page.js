"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    try {
      await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      setCreatingUser(false);
      setError(false)
      setUserCreated(true);
    } catch (e) {
      setError(true)
    }
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="m-4 text-center">
          User created. Now you can login{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="m-4 text-center">
        An error has occured.<br/>
        Please try again later 
      </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={creatingUser}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={creatingUser}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex items-center gap-4 justify-center">
          <Image src={"/google.png"} alt="google logo" width={24} height={24} />
          Login with Google
        </button>
      <div className="text-center my-4 text-gray-500 border-t py-4">
        Exisiting account ? <Link className="underline" href={'/login'}>Login here &raquo;</Link>
      </div>
      </form>
    </section>
  );
}
