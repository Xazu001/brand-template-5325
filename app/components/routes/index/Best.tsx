import { GoDotFill } from "react-icons/go";
import { Link } from "@remix-run/react";

export default function Best() {
  const projects = [
    {
      className: "col-span-6 md:col-span-8",
      to: "test",
    },
    {
      className: "col-span-6 md:col-span-4",
      to: "test",
    },
    {
      className: "col-span-6 md:col-span-4",
      to: "test",
    },
    {
      className: "col-span-6 md:col-span-4",
      to: "test",
    },
    {
      className: "col-span-6 md:col-span-4",
      to: "test",
    },
  ];

  return (
    <section id="projects" className="relative">
      <div className="bottom-0 absolute">
        <Circles repeats={5} />
      </div>
      <div className="relative container">
        <div className="relative flex items-center gap-4">
          <h1 className="font-header">BEST PROJECTS</h1>
          <GoDotFill className="text-4xl text-accent-1" />
        </div>
        <div className="gap-4 grid grid-cols-12 pt-title">
          {projects.map((el) => (
            <Link
              to={`projects/${el.to}`}
              className={`bg-item-1 min-h-[18rem] shadow-md hover:scale-[0.995] duration-300 border border-border-1 ${el.className} `}
            ></Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Circles({ repeats }: { repeats: number }) {
  const circles = Array.from({ length: repeats }, (_, i) => {
    const size = `${100 - i * 15}rem`; // Zmniejszamy o 1rem na każde powtórzenie
    return (
      <div
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={i}
        className="absolute flex justify-center items-center border border-border-1 rounded-full aspect-square"
        style={{ height: size, width: size }}
      />
    );
  });

  return (
    <div className="relative flex justify-center items-center">{circles}</div>
  );
}
