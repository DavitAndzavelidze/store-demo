import { FiHeart } from "react-icons/fi";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Cart from "@/components/Cart";
import Register from "@/components/Register";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="max-w-[1440px] w-full mx-auto px-6 flex justify-between items-center py-[1rem]">
      <span className="border-b-2 w-full absolute top-20 left-0"></span>
      <div>
        <Link href="/">
          <h2 className="text-[1.4rem] font-bold">🛒 Logo</h2>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <Input radius="none" size="sm" type="text" label="Search..." />
        <Button
          radius="none"
          className="bg-slate-600 px-3 py-[1.5rem]  text-white rounded-r-lg"
          color="primary"
        >
          Search
        </Button>
      </div>
      <div className="flex justify-center items-center  gap-2 text-[1.4rem]">
        <Button size="sm" className="bg-white text-[1.4rem]">
          <FiHeart />
        </Button>

        <Cart />
        <Register />
      </div>
    </nav>
  );
};

export default Navigation;
