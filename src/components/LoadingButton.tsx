import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const LoadingButton = () => {
  return (
    <Button>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  );
};

export default LoadingButton;
