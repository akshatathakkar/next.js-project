"use client";
import React from "react";
import Accordion from "./accordion";

import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
        <div>
         <Accordion title="Personal Details" content={session.user.name}
          />
      </div></div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;