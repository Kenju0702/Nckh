/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Bật hỗ trợ thư mục `app` (cần thiết cho Next.js 13)
  },
  pageExtensions: ['tsx', 'ts', 'js', 'jsx'], // Đảm bảo rằng Next.js nhận diện đúng các định dạng tệp trang
};

module.exports = nextConfig;
