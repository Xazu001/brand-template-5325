import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <section className="relative pt-24 pb-4">
      <div className="right-0 bottom-0 -z-10 absolute blur-[360px] w-full h-[12rem] translate-x-1/2 bg-accent-1" />
      <div className="grid grid-cols-3 container">
        <Link
          to="/cookies"
          className="w-full text-2xl text-center text-accent-1"
        >
          TERMS & AGREEMENTS
        </Link>
        <a
          href="https://freepik.com"
          target="_blank"
          rel="noreferrer"
          className="w-full text-2xl text-center text-accent-1"
        >
          FREE TO USE TEMPLATE
        </a>
        <Link
          to="/cookies"
          className="w-full text-2xl text-center text-accent-1"
        >
          PRIVACY POLICY
        </Link>
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
