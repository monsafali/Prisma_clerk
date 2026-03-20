"use client";



import { Show, SignInButton,  SignUpButton, UserButton } from "@clerk/nextjs";

const AuthButtons = () => {
  return (
    <div className="flex gap-3">
      <Show when="signed-out">
        <SignInButton />

        <SignUpButton />
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

export default AuthButtons;
