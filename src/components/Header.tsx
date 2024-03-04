import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="border-b-2 border-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/"}
          className="text-3xl tracking-tight font-bold text-orange-500"
        >
          JevlisKa.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <Button
          variant={"ghost"}
          className="hidden md:block hover:bg-white hover:text-orange-500 font-bold text-[1.2rem]"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Header;
