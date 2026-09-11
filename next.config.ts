import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "/resources/careers",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/resources/contact-us",
        permanent: true,
      },
      {
        source: "/civil-construction-company-chennai",
        destination: "/services/civil",
        permanent: true,
      },
      {
        source: "/pre-engineered-building-manufacturer-company-chennai",
        destination: "/services/peb",
        permanent: true,
      },
      {
        source: "/warehouse-shed-manufacturer-chennai",
        destination: "/industries/logistics-and-warehouse",
        permanent: true,
      },
      {
        source: "/factory-building-manufacturer",
        destination: "https://factorybuildingmanufacturer.mekark.com/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.mekark.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
