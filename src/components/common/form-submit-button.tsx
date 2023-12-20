"use client";
import { Button } from "@nextui-org/button";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const SubmitButton = ({ children }: Props) => {
  const status = useFormStatus();
  return (
    <Button type="submit" color="primary" isLoading={status.pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
