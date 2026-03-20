import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  const LoggedIn = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // ✅ If user already exists
  if (LoggedIn) return LoggedIn;

  // ✅ If NOT exists → create new user
  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: user.fullName,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};
