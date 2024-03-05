import Header from "@/components/Header";
import React from "react";
import hero from "../assets/hero.png";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <img
        src={hero}
        alt="heroImg"
        className="w-full max-h-[600px] object-cover"
      />
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

export default Layout;
