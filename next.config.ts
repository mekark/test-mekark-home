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
      {
        source: "/manufacturing",
        destination: "https://manufacturing.mekark.com/",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/about/life-at-mekark",
        permanent: true,
      },
      {
        source: "/peb-contractor",
        destination: "/services/peb",
        permanent: true,
      },
      {
        source: "/tensile-fabric-roofing",
        destination: "/services/tensile",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about/our-history",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "/about/life-at-mekark",
        permanent: true,
      },
      {
        source: "/multi-level-car-parking-system-manufacturer-company-chennai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/multi-storey-building-manufacturer",
        destination: "/services/multi-storey",
        permanent: true,
      },
      {
        source: "/peb-industrial-shed-supplier",
        destination: "/services/peb",
        permanent: true,
      },
      {
        source: "/architectural-design-detailing-drafting-chennai",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    // 75 is the default; 50/60 are used by mobile-only images (contact hero, project cards).
    qualities: [50, 60, 75],
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
