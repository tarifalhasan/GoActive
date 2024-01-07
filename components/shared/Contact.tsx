"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
const formSchema = z.object({
  first_name: z.string().min(3).max(50),
  last_name: z
    .string({
      required_error: "Please enter last Name",
    })
    .min(3)
    .max(50),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone_number: z.string().min(10).max(10),
  message: z.string().min(10).max(50).optional(),
});
const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="bg-slate-900 py-[40px] lg:py-[80px]">
      <div className="grid container lg:grid-cols-2  gap-8 lg:gap-16">
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          className="flex flex-col gap-6 justify-between"
        >
          <h2 className="text-2xl lg:text-[3.25rem] font-bold lg:leading-[119%]">
            Sign up for our priority investor waitlist
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-[13px]">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="First Name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Last Name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone Number*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className=" min-h-[114px]"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-[36px]">
                <Button variant={"secondary"} type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <Image
            src={"/images/contact.png"}
            width={550}
            alt="contact"
            className=" w-full rounded-2xl lg:rounded-3xl object-cover h-[394px] sm:h-[65vh] lg:h-[605px]"
            height={604}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
