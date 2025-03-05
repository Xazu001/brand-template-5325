import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import TransitionWrapper from "../../base/PageTransitionWrapper";

export default function Services() {
  const [active, setActive] = useState(0);

  const accordionItems = [
    {
      title: "UI/UX Design",
      description:
        "We create user-centered designs that are both visually stunning and easy to use.",
    },
    {
      title: "Web Design",
      description:
        "Our web design services ensure your website is visually appealing, responsive, and functional.",
    },
    {
      title: "Brand Design",
      description:
        "We help build strong brands with memorable logos, color schemes, and brand guidelines.",
    },
    {
      title: "Coding",
      description:
        "Our development team writes clean, maintainable code to bring your digital products to life.",
    },
  ];

  return (
    <TransitionWrapper>
      <section id="services" className="pt-36">
        <div className="container">
          <h1 className="font-header">Our services</h1>
          <div className="opacity-60 pt-4 max-w-screen-sm min-h-[8rem]">
            <strong className="text-2xl">
              {accordionItems[active].description}
            </strong>
          </div>

          <div className="flex flex-col pt-title">
            {accordionItems.map((el, idx) => (
              <button
                type="button"
                className={`p-8 first-of-type:border-t-2 border-b-2 border-border-1 text-left hover:bg-item-1h duration-300 flex items-center justify-between ${
                  active === idx ? "bg-item-1" : ""
                }`}
                onClick={() => {
                  setActive(idx);
                }}
              >
                <strong
                  className={`text-6xl ${active === idx ? "" : "opacity-70"}`}
                >
                  {el.title}
                </strong>
                <MdOutlineArrowOutward
                  className={`text-8xl ${active === idx ? "bg-accent-1" : ""}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
}
