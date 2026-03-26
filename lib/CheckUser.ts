import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;

  const email = user.emailAddresses[0].emailAddress;

  // 🔍 Check by clerkUserId OR email
  let existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ clerkUserId: user.id }, { email: email }],
    },
  });

  // ✅ If user exists → update clerkUserId if missing
  if (existingUser) {
    // Optional: sync clerkUserId if not set
    if (!existingUser.clerkUserId) {
      existingUser = await prisma.user.update({
        where: { id: existingUser.id },
        data: { clerkUserId: user.id },
      });
    }
    return existingUser;
  }

  // ✅ Otherwise create new
  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name: user.fullName,
      email,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};