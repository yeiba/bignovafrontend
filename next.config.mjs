/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ["voqbifxrutmgzfalgdfp.supabase.co"],
    },
    experimental: {
        esmExternals: true, // Allow ESM imports
    },
};

export default nextConfig;
