"use client";

import { Formik } from "formik";
import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [url, setUrl] = React.useState("");

  const formMutation = useMutation({
    mutationFn: (body: { url: string; slug: string }) => {
      return axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, body, {
        headers: {
          "Access-Token": process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
        },
      });
    },
    onSuccess: (data, variables) => {
      const fullUrl = `http://127.0.0.1:8000/${variables.slug}`;

      setUrl(fullUrl);
      toast.success("Short link created");
    },
    onError: (error: any) => {
      if (error.response?.status === 400) {
        toast.error("Invalid URL or Slug");
      } else if (error.response?.status === 500) {
        toast.error("Internal Server Error");
      } else {
        toast.error("An error occurred");
      }
    },
  });

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <div className="inline-block max-w-xl text-center justify-center w-full">
        <h1 className={title()}>Website </h1>
        <h1 className={title({ color: "cyan" })}>URLShortly</h1>
        <h2 className={subtitle()}>Shorten URL easily</h2>
      </div>

      {url !== "" && (
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xl">
          <Input readOnly className="flex-1" value={url} />
          <Button
            color="primary"
            onClick={() => {
              navigator.clipboard.writeText(url);
              toast.success("Link copied");
            }}
          >
            Copy
          </Button>
          <Button color="secondary" onClick={() => window.open(url, "_blank")}>
            Open
          </Button>
        </div>
      )}

      <Formik
        initialValues={{ url: "", slug: "" }}
        onSubmit={(values) => {
          formMutation.mutate(values);
          setUrl("");
        }}
      >
        {({ values, handleSubmit, handleChange, resetForm }) => (
          <form
            className="flex flex-col gap-2 w-full max-w-xl"
            onSubmit={handleSubmit}
          >
            <Input
              className="w-full"
              label="URL"
              name="url"
              placeholder="Enter your URL"
              value={values.url}
              onChange={handleChange}
            />
            <Input
              className="w-full"
              label="Slug"
              name="slug"
              placeholder="Enter your slug"
              value={values.slug}
              onChange={handleChange}
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                color={"primary"}
                isLoading={formMutation.isPending}
                type={"submit"}
              >
                Create
              </Button>
              <Button
                color="default"
                type="button"
                onClick={() => {
                  resetForm();
                  setUrl("");
                }}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
