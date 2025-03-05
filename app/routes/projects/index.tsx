import { type LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import projects from "@/app/lib/content/Projects";
import { useLoaderData } from "@remix-run/react";
import TransitionWrapper from "@/app/components/base/PageTransitionWrapper";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const project = projects.find((el) => el.route === params.project);

  if (!project) {
    return redirect("/404");
  }

  return project;
};

export default function Index() {
  const loaderData = useLoaderData<typeof loader>();
  return (
    <div className="min-h-svh">
      <section className="relative py-0 overflow-hidden bg-accent-1">
        <TransitionWrapper>
          <div className="pt-24 container">
            <h1 className="text-center">{loaderData.name}</h1>
          </div>
          <div className="pt-36 container">
            <div className="relative">
              <img
                src={loaderData.mainImgSrc}
                alt="Project Image"
                className="rounded-t-[6rem] w-full object-cover aspect-[15/9]"
              />
            </div>
          </div>
        </TransitionWrapper>
      </section>
      <section>
        <TransitionWrapper direction="bottom">
          <div className="container">
            <strong className="text-4xl">{loaderData.description}</strong>
          </div>
        </TransitionWrapper>
      </section>
      <section>
        <TransitionWrapper direction="bottom">
          <PhotoProvider>
            <div className="items-start gap-4 grid md:grid-cols-2 container">
              <div className="gap-4 grid">
                {loaderData.gallery.map((el, idx) => {
                  if (idx % 2 === 0)
                    return (
                      <PhotoView src={el}>
                        <img
                          key={idx}
                          src={el}
                          alt="Gallery Image"
                          className="border border-border-1 w-full cursor-pointer"
                        />
                      </PhotoView>
                    );
                })}
              </div>
              <div className="gap-4 grid">
                {loaderData.gallery.map((el, idx) => {
                  if (idx % 2 !== 0)
                    return (
                      <PhotoView src={el}>
                        <img
                          key={idx}
                          src={el}
                          alt="Gallery Image"
                          className="border border-border-1 w-full cursor-pointer"
                        />
                      </PhotoView>
                    );
                })}
              </div>
            </div>
          </PhotoProvider>
        </TransitionWrapper>
      </section>
    </div>
  );
}
