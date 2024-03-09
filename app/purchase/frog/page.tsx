"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import FeedbackButton from "@/components/feedback-button";
import BackButton from "@/components/back-button";
import Image from "next/image";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, "Incomplete  Field"),
  emailAddress: z.string().email("Invalid email address."),
  streetAddress: z.string().min(2, "Incomplete  Field"),
  city: z.string().min(2, "Incomplete  Field"),
  state: z.string().min(2, "Incomplete  Field"),
  zipcode: z.string().min(2, "Incomplete  Field"),
  country: z.string().min(2, "Incomplete  Field"), //want this to be dropdown menu
  quantity: z.string().min(1, "Incomplete  Field"), //want this to be dropdown menu
});

export default function CrochetMainPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      streetAddress: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const handleSubmit = () => {
    toast({
      title: "Purchase Successful!",
      description: "Thank you for your purchase.",
    });
  };
  const [complete, setComplete] = useState(false);
  const { toast } = useToast();

  // const [state, formAction] = useFormState(fn, initialState, permalink?);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold pl-3">Frog Crochet</h1>
      {/* Back Button Section */}
      <BackButton></BackButton>
      {/* Navigation Bar Section*/}
      <FeedbackButton></FeedbackButton>

      {/* <Image src="@/public/bunny.jpg" alt="Bunny Crochet" /> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <FormField
            name="fullName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel> Frog Crochet Purchase </FormLabel>
                  <Input placeholder="Full Name" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="emailAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="Email Address" type="email" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="streetAddress"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="Street Address" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="city"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="City" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="state"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="State" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="zipcode"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="Zipcode" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="country"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="Country" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            name="quantity"
            render={({ field }) => {
              return (
                <FormItem>
                  <Input placeholder="Quantity" type="" {...field} />
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full">
            Purchase
          </Button>
        </form>
      </Form>
    </main>
  );
}
