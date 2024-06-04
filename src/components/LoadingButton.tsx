import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
const LoadingButton = () => {
  return (
    <Button className="flex-1">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  );
};

export default LoadingButton;
