import TransitionWrapper from "../../base/PageTransitionWrapper";

export default function About() {
  return (
    <TransitionWrapper>
      <section id="about">
        <div className="relative flex flex-wrap justify-between gap-4 bg-item-1 p-16 text-6xl uppercase container">
          <div className="bottom-0 left-1/2 -z-10 absolute blur-[200px] w-full h-[3rem] -translate-x-1/2 translate-y-[2rem] bg-accent-1" />
          <h3 className="font-header">We provide</h3>
          <div className="rounded-full w-[12rem] h-[1.2ch] overflow-hidden">
            <img
              src="/img/small.avif"
              alt="Small Decoration"
              className="w-full h-full object-fill translate-x-[0px]"
            />
          </div>

          <h3 className="font-header">creative</h3>
          <h3 className="font-header">solutions</h3>
          <div className="rounded-full w-[12rem] h-[1.2ch] overflow-hidden">
            <img
              src="/img/small.avif"
              alt="Small Decoration"
              className="w-full h-full object-fill rotate-[180deg]"
            />
          </div>
          <h3 className="font-header">that shakes</h3>
          <h3 className="font-header">the world!</h3>
        </div>
      </section>
    </TransitionWrapper>
  );
}
