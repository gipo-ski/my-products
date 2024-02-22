/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "jsonplaceholder.typicode.com",
				port: "",
				pathname: "/photos/**",
			},
		],
	},
	images: {
		domains: ["via.placeholder.com"], // Add your domain(s) here
	},
};

export default nextConfig;

// https://jsonplaceholder.typicode.com/photos
