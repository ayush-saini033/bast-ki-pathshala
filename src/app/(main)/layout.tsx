"use client"

import Header from "@/shared/header";
import Footer from "@/shared/footer";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const LayoutPage = ({ children }: { children: ReactNode }) => {

  const pathName = usePathname();

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-300 selection:text-black">
      {!pathName.includes("registration") && !pathName.includes("admin") && <Header />}
      <div className="overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
