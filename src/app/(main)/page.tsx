"use client";

import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { push, back, forward, prefetch } = useRouter();

  return (
    <div>
      Home Page
      <Button onClick={() => push("/product")}>Link to Login Page</Button>
      <Button href="/product">Link to Login Page</Button>
      <Link href={"/product"}>Link to Login Page</Link>
    </div>
  );
}
