import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";
import { profile } from "./data/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = profile.siteUrl;
const title = `${profile.name} - ${profile.title}`;
const description = profile.description;
const ogImage = {
  url: "/assets/og-image.jpg",
  alt: "Mukesh Sharma",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "Front End Developer",
    "Back End Developer",
    "Web Developer",
    "MongoDB",
    "ExpressJS",
    "ReactJS",
    "NodeJS",
  ],
  authors: [{ name: "Mukesh Sharma", url: siteUrl }],
  creator: "Mukesh Sharma",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mukesh Sharma",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: profile.twitterHandle,
    images: [ogImage],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Analytics />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
