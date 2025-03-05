import { Link } from "@remix-run/react";

export default function Nav() {
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
          <Link to="/contact" className="text-2xl">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
