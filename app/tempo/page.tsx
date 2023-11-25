"use client";

import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { ApiRes } from "@/lib/types/api-response";

const TempoPage = () => {
  const [packLink, setPackLink] = useState<string>("");
  const [cupLink, setCupLink] = useState<string>("");
  const [coffee, setCoffee] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post<ApiRes>(`/api/tempo`, {
        cName: coffee,
        packLink,
        cupLink,
      });
      if (!res.data.success) {
        throw new Error(res.data.message);
      }
      toast.success(`Uploaded to ${coffee}`);
      setPackLink("");
      setCupLink("");
      setCoffee("");
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="flex flex-col w-[80%] h-full gap-y-6 items-center">
      <FileUpload
        onChange={(url) => setCupLink(url || "")}
        isSubmitting={isLoading}
        value={cupLink}
      />
      <FileUpload
        onChange={(url) => setPackLink(url || "")}
        isSubmitting={isLoading}
        value={packLink}
      />
      <Input
        value={coffee}
        onChange={(value) => setCoffee(value.target.value)}
      />
      <Button className="mt-8" onClick={onSubmit}>
        submit and reset
      </Button>
    </main>
  );
};

export default TempoPage;
