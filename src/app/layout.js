import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./global.css";
import Head from "next/head";
import { Providers } from "./providers";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./icon.png" type="image/png" />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
