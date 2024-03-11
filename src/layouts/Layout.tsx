import Header from "@/components/Header";
import React from "react";
import hero from "../assets/hero.png";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

const Hero = () => {
  return (
    <img
      src={hero}
      alt="heroImg"
      className="w-full max-h-[600px] object-cover"
    />
  );
};

export default Layout;
