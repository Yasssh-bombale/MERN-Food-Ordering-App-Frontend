import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UserNameMenu from "./UserNameMenu";

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

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

        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <UserNameMenu />
          ) : (
            <Button
              variant={"ghost"}
              className="hidden md:block hover:bg-white hover:text-orange-500 font-bold text-[1.2rem]"
              onClick={async () => await loginWithRedirect()}
            >
              Log in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
