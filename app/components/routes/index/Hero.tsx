import TransitionWrapper from "@/app/components/base/PageTransitionWrapper";
import "./HeroTape.css";
import { LuSparkle } from "react-icons/lu";
export default function Hero() {
  const adj = [
    {
      title: "The Best Agency",
      icon: "X",
    },
    {
      title: "Innovative",
      icon: "V",
    },
  ];

  return (
    <>
      <section className="relative py-0 overflow-hidden bg-accent-1">
        <TransitionWrapper>
          <div className="pt-24 container">
            <h1 className="font-header text-9xl uppercase tracking-wider">
              Creative
            </h1>
            <div className="flex justify-between gap-10">
              <h1 className="flex-grow font-header text-9xl uppercase">Core</h1>
              <p className="pt-8 w-screen-xs font-medium text-right">
                Designing websites that combine creativity, modernity, and
                functionality to support your business.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 pt-12 container">
            {adj.map((el) => (
              <div className="flex items-center gap-3 px-6 py-2 border border-light rounded-full">
                <strong>{el.icon}</strong>
                <strong>{el.title}</strong>
              </div>
            ))}
            <div className="flex-1 bg-light h-[2px]"></div>
          </div>
          <div className="pt-36 container">
            <div className="relative">
              <img
                src="/img/hero.avif"
                alt="Hero Abstract Image"
                className="rounded-t-[6rem] w-full object-cover aspect-[15/9]"
              />
            </div>
          </div>
        </TransitionWrapper>
      </section>
      <Tape />
    </>
  );
}

function Tape() {
  const titles = [
    "DISCUSS YOUR IDEAS",
    "BRING YOUR IDEAS TO LIFE",
    "EXPRESS YOURSELF",
  ];

  function title(title: string) {
    return (
      <div
        className="flex flex-shrink-0 justify-center items-center gap-4 mx-[4rem] py-6"
        style={{
          width: "45rem",
        }}
      >
        <LuSparkle className="text-5xl fill-accent-1 text-accent-1" />
        <strong className="text-5xl">{title}</strong>
      </div>
    );
  }

  return (
    <div className="bg-[#040404]">
      <div className="flex w-full box">
        <div className="tape">{titles.map((el) => title(el))} </div>
        <div className="tape">{titles.map((el) => title(el))} </div>
      </div>
    </div>
  );
}
