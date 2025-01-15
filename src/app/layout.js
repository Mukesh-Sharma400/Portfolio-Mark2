import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./global.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Mukesh Sharma - Full Stack Developer",
  description:
    "Experienced Full stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
  keywords:
    "Full Stack Developer, Front End Developer, Back End Developer, Web Developer, MongoDB, ExpressJS, ReactJS, NodeJS",
  author: "Mukesh Sharma",
  image: "./icon.png",
  url: "https://mukesh-sharma.vercel.app",
  type: "website",
  ogTitle: "Mukesh Sharma - Full Stack Developer",
  ogDescription:
    "Experienced Full stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
  ogImage: "./icon.png",
  twitterTitle: "Mukesh Sharma - Full Stack Developer",
  twitterDescription:
    "Experienced Full stack developer specializing in creating robust and scalable web applications. Passionate about delivering high-quality solutions to meet client needs.",
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
