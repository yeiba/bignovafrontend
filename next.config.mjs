/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["voqbifxrutmgzfalgdfp.supabase.co", "https://images.unsplash.com"],
    },
    experimental: {
        esmExternals: true, // Allow ESM imports
    },
};

export default nextConfig;
