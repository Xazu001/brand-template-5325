import type { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import Input from "../components/basic/inputs/InputWL";
import ItemButton from "../components/basic/buttons/ItemButton";
import { Resend } from "resend";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email");
  const message = formData.get("message");

  const resend = new Resend(context.cloudflare.env.RESEND_KEY);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["xazu.work@Gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  return null;
};

export default function Index() {
  return (
    <Form method="post" action=".">
      <div className="flex justify-center items-center min-h-svh">
        <section className="w-full">
          <div className="flex flex-col gap-4 p-8 rounded-2xl max-w-screen-sm bg-accent-1 container">
            <Input
              name="email"
              title="Email"
              placeholder="Enter your email!"
            ></Input>
            <Input
              name="message"
              type="textarea"
              title="Message"
              placeholder="Enter your message!"
              inputClassName="rounded-3xl"
            ></Input>
            <ItemButton type="submit" textClassName="py-3 px-9">
              SEND
            </ItemButton>
          </div>
        </section>
      </div>
    </Form>
  );
}
