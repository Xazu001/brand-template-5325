import { Link } from "@remix-run/react";

export default function Nav() {
  const links = [
    { to: "/#about", title: "About" },
    { to: "/#services", title: "Services" },
    { to: "/#projects", title: "Projects" },
    { to: "/contact", title: "Get in Touch" },
  ];

  return (
    <section className="py-0 bg-accent-1">
      <div className="flex justify-between items-center py-6 container">
        <div className="group relative cursor-pointer">
          <strong className="group-hover:blur-[1px] absolute opacity-80 font-header text-3xl duration-300">
            Temp
          </strong>
          <Link to="/" className="font-header text-3xl">
            Temp
          </Link>
        </div>

        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="group relative text-2xl">
                {link.title}
                <div className="group-hover:w-full bottom-0 absolute bg-light w-0 h-[3px] translate-y-[3px] duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
