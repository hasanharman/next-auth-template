"use client";

interface BackButtonProps {
  label: string;
  href: string;
}

import Link from "next/link";
import { Button } from "../ui/button";

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button size="sm" variant="link" className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
