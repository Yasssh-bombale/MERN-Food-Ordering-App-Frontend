import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to={"/user-profile"}
        className="font-bold bg-white hover:text-orange-500 flex items-center"
      >
        User profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3  hover:bg-gray-700 font-bold"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
