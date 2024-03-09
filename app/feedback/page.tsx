"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import BackButton from "@/components/back-button"


const FormSchema = z.object({
  feedback: z
    .string()
    .min(10, {
      message: "Feedback must be at least 10 characters.",
    })
    .max(1000, {
      message: "Feedback must not be longer than 1,000 characters.",
    }),
});

export default function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Thank you for your feedback!",
      description: "Your suggestions will be reviewed within 3 business days.",
    });
  }

  return (
    <div className="m-6">
      {/* Back Button Section */}
      <BackButton></BackButton>

      <div className="mt-45">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-center font-lg">Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave your feedback regarding projects."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
    </div>
  );
}
