import { Button } from "@heroui/react";
import { Eye } from "lucide-react";

const Header = () => {
  return (
    <nav className="h-14 bg-gray-100 border-b border-gray-200 flex items-center justify-end px-5">
      <Button variant="outline">
        <Eye /> Focus
      </Button>
    </nav>
  );
};

export default Header;
