import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import Hero from "#/components/routes/index/Hero";
import Services from "../components/routes/index/Services";
import About from "#/components/routes/index/About";
import Best from "#/components/routes/index/Best";
import Contact from "#/components/routes/index/Contact";
export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  return null;
};

export default function Index() {
  return (
    <div className="min-h-svh">
      <Hero />
      <Services />
      <About />
      <Best />
      <Contact />
    </div>
  );
}
