"use client";
import { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { ActionFunction } from "@/lib/types";
import React from "react";

const initialState = { message: "" };

type FormContainerProps = {
  action: ActionFunction;
  children: React.ReactNode;
};

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
