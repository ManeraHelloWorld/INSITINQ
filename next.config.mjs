/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local SVG placeholders during scaffold
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
