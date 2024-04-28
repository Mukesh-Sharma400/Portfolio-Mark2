import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./global.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Mukesh Sharma - MERN Stack Developer",
  description:
    "Experienced MERN stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
  keywords:
    "MERN stack, web development, MongoDB, Express.js, React, Node.js, full-stack developer",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://mukesh-sharma.vercel.app",
  type: "website",
  ogTitle: "Mukesh Sharma - MERN Stack Developer",
  ogDescription:
    "Experienced MERN stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
  ogImage: "./icon.png",
  twitterTitle: "Mukesh Sharma - MERN Stack Developer",
  twitterDescription:
    "Experienced MERN stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
      </head>
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
