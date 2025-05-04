import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import config from "@/config/config";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: config.GOOGLE_CLIENT_ID as string,
      clientSecret: config.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: config.GITHUB_CLIENT_ID, // Replace with your GitHub Client ID
      clientSecret: config.GITHUB_CLIENT_SECRET, // Replace with your GitHub Client Secret
    }),
  ],
};
