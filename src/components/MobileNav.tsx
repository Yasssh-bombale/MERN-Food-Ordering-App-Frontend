import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <div className="flex items-center gap-2 font-bold">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
              </div>
            ) : (
              <span className="text-sm sm:text-lg ">
                Welcome to JevlisKa.com!
              </span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={async () => await loginWithRedirect()}
                className="flex-1 bg-orange-500 font-bold"
              >
                Log in
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
