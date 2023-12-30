import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./global.css";
import Head from "next/head";
import { Providers } from "./providers";

export const metadata = {
  title: "Mukesh Sharma | MERN STACK DEVELOPER",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icon.png" type="image/png" />
      </Head>
      <body>
        <Providers>{children}</Providers>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
