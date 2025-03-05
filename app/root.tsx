import { MetaFunction } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind from "./tailwind.css?url";
import loaderStyle from "./styles/loaders/main.css?url";
import { useEffect, useState } from "react";
import Nav from "./components/base/Nav";
import Footer from "./components/base/Footer";

export const links: LinksFunction = () => [
  ...(tailwind ? [{ rel: "stylesheet", href: tailwind }] : []),
  ...(loaderStyle ? [{ rel: "stylesheet", href: loaderStyle }] : []),
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Temp",
  },
];

export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 400);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-bg">
        <div className="overflow-hidden">
          <Nav />
          <Outlet />
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
