"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return (
      <div className="flex gap-3 items-center">
        <button
          onClick={() => signIn(undefined, { callbackUrl: "/" })}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Sign in
        </button>
        <a href="/signup" className="px-4 py-2 border rounded">
          Sign up
        </a>
      </div>
    );
  }

  return (
    <div className="flex gap-3 items-center">
      <span className="text-sm">Signed in as {session.user?.email}</span>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-3 py-1 border rounded"
      >
        Sign out
      </button>
    </div>
  );
}
