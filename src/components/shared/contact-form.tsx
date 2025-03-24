"use client";
import { sendFormToEmail } from "@/action/email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import Text from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

const formData = z.object({
  name: z.string().min(1, "Name is required"),
  phonenumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Email must be valid"),
  message: z.string().optional(),
});

type ContactFormDataType = z.infer<typeof formData>;

export default function ContactForm() {
  const form = useForm<ContactFormDataType>({
    defaultValues: {
      name: "",
      phonenumber: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formData),
  });
  const {
    formState: { isSubmitSuccessful },
  } = form;

  async function onSubmit(data: ContactFormDataType) {
    await sendFormToEmail(data);
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col gap-4 justify-center h-full">
        <Text as="h2" variant="sectionHeading">
          {"All Done"}
        </Text>
        <Text>{"Thank you. We will be in touch with you shortly."}</Text>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-4 lg:gap-6"
      >
        <div className="grid gap-4 lg:gap-6">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg text-black font-normal leading-[150%]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 justify-between">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-lg text-black font-normal leading-[150%]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
            <FormField
              name="phonenumber"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-lg text-black font-normal leading-[150%]">
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <PhoneInput defaultCountry="SG" {...field} />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          </div>

          <FormField
            name="message"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="space-y-1">
                  <FormLabel className="text-lg text-black font-normal leading-[150%]">
                    Enquiry
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type a message..." {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </div>

        <Button
          className="w-fit mb-0"
          aria-label="Submit form to contact us"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
