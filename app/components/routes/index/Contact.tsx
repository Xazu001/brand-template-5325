import { LuSparkle } from "react-icons/lu";
import ItemButton from "../../basic/buttons/ItemButton";
import TransitionWrapper from "../../base/PageTransitionWrapper";

export default function Contact() {
  const emptyArray = new Array(3).fill("");

  return (
    <TransitionWrapper direction="bottom">
      <section className="relative">
        <div className="p-8 rounded-b-[6rem] bg-accent-1 container">
          <div className="flex justify-center items-center gap-4 pt-12">
            <div className="flex-1 bg-light opacity-50 h-[2px]"></div>
            {emptyArray.map(() => (
              <LuSparkle className="opacity-50 fill-light text-5xl"></LuSparkle>
            ))}
            <div className="flex-1 bg-light opacity-50 h-[2px]"></div>
          </div>
          <div className="pt-24">
            <h1 className="font-header text-center">
              LET'S DISCUSS YOUR IDEAS
            </h1>
            <br />
            <div className="flex justify-center pt-8">
              <ItemButton textClassName="text-2xl py-4 px-12">
                GET IN TOUCH
              </ItemButton>
            </div>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
}
