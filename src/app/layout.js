import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./global.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl = "https://mukesh-sharma.vercel.app";
const title = "Mukesh Sharma - Full Stack Developer";
const description =
  "Experienced Full stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.";
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
    creator: "@mukesh_sharma36",
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
