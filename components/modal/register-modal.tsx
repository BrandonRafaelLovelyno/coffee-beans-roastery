"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as z from "zod";
import useModal from "@/hooks/useModal";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { ProfileRes } from "@/lib/types/api-response";
import toast from "react-hot-toast";
import MotionDivUp from "../motion-div/motion-div-up";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Please enter your name" }),
  email: z.string().min(1, { message: "Please enter your email" }),
  password: z
    .string()
    .min(7, { message: "Password has to be longer than 7 chars" }),
});

const RegisterModal = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: zodResolver(formSchema),
  });
  const modal = useModal();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post<ProfileRes>("/api/register", values);
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      signIn("credentials", { email: values.email, password: values.password });
      toast.success("Account created");
    } catch (err) {
      toast.error((err as Error).message);
    }
  };
  return (
    <Dialog
      open={modal.isOpen && modal.type == "register"}
      onOpenChange={() => {
        form.reset();
        modal.onClose();
      }}
    >
      <DialogContent className="py-0 min-w-fit">
        <div className="flex flex-row w-full">
          <div className="w-[40%] h-full bg-white" />
          <div className="flex-1 w-[50rem] py-3 px-5">
            <MotionDivUp delay={0.3} duration={0.3} key="register-modal">
              <DialogHeader className="text-lg tracking-widest">
                Register
              </DialogHeader>
              <DialogDescription className="mb-5">
                Register for further feature
              </DialogDescription>
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-y-5">
                    <FormField
                      name="name"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your name</FormLabel>
                          <FormControl>
                            <Input
                              value={field.value}
                              onChange={field.onChange}
                              disabled={form.formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      disabled={form.formState.isSubmitting}
                    />
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your email</FormLabel>
                          <FormControl>
                            <Input
                              value={field.value}
                              onChange={field.onChange}
                              disabled={form.formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      disabled={form.formState.isSubmitting}
                    />
                    <FormField
                      name="password"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Create your password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              value={field.value}
                              onChange={field.onChange}
                              disabled={form.formState.isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      disabled={form.formState.isSubmitting}
                    />
                  </div>
                  <DialogFooter className="mt-5">
                    <Button variant={"ghost"}>Done!</Button>
                  </DialogFooter>
                </form>
              </FormProvider>
            </MotionDivUp>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
