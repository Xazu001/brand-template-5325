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
import PageTransitionWrapper from "./components/base/PageTransitionWrapper";
import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";

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
        {/* {!loaded && <Loader />} */}

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

function Footer() {
  const footerList = [
    "TERMS & AGREEMENTS",
    "FREE TO USE TEMPLATE",
    "PRIVACY POLICY",
  ];

  return (
    <section className="relative pt-24 pb-4">
      <div className="right-0 bottom-0 -z-10 absolute blur-[360px] w-full h-[12rem] translate-x-1/2 bg-accent-1" />
      <div className="grid grid-cols-3 container">
        {footerList.map((el) => (
          <strong className="text-xl text-center whitespace-nowrap text-accent-1">
            {el}
          </strong>
        ))}
      </div>
      <div className="pt-2 text-center container">
        <a
          href="https://freepik.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm"
        >
          Images Downloaded from Freepik
        </a>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <section className="py-0 bg-accent-1">
      <div className="flex justify-between items-center py-6 container">
        <Link to="/" className="font-header text-3xl">
          Temp
        </Link>

        <div className="flex gap-6">
          <Link to="/#about" className="text-2xl">
            About
          </Link>
          <Link to="/#services" className="text-2xl">
            Services
          </Link>
          <Link to="/#projects" className="text-2xl">
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function Loader() {
  return (
    <div className="z-50 fixed flex justify-center items-center bg-bg w-full h-full">
      <div className="loader"></div>
    </div>
  );
}
