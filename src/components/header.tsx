import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Header = () => {
  return (
    <>
      <Card className="flex flex-row justify-between items-center py-5 px-8 rounded-none border-0 shadow-md">
        <Button variant={'outline'} size={'icon'} className="border-0">
            <MenuIcon size={24}/>
        </Button>

        <h1 className="text-xl">Clothes<span className="text-primary font-bold">Store</span></h1>

        <Button variant={'outline'} size={'icon'} className="border-0">
            <ShoppingCartIcon size={24}/>
        </Button>
      </Card>
    </>
  );
};

export default Header;
