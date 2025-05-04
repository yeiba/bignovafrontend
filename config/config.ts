// eslint-disable-next-line import/no-anonymous-default-export
export default {
  NODE_ENV: process.env.NODE_ENV as string,
  NEXT_BASE_URL: process.env.NEXT_PUBLIC_API_URL as string,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY as string,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,

  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID as string,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET as string,
};
