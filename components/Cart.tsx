import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Tooltip,
} from "@nextui-org/react";
import nikeShoeOne from "@/public/1.png";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import pumaShoeOne from "@/public/12.png";

export default function App() {
  return (
    <Popover placement="bottom" showArrow={true} backdrop="opaque">
      <PopoverTrigger>
        <Button size="sm" variant="flat" className="bg-white text-[1.4rem]">
          <AiOutlineShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col justify-left items-center py-6 px-6 gap-12">
          <div className="flex ">
            <div className="flex justify-center items-center">
              <Image
                src={nikeShoeOne}
                width={100}
                height={100}
                alt="nikeShoe"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-2 px-4">
              <div className="flex justify-between font-bold text-[1rem]">
                <h3>Nike Air 2023</h3>
                <p>$230</p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                eos quae facilis nostrum numquam
              </p>
              <div className=" flex justify-between items-center">
                <p className="font-bold">QTY: 1</p>
                {/* <Button color="danger">Remove</Button> */}
                <Tooltip content="Delete item">
                  <div className="text-[red] text-[1.2rem]">
                    <FiTrash />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex justify-center items-center">
              <Image
                src={pumaShoeOne}
                width={100}
                height={100}
                alt="pumashoe"
              />
            </div>
            <div className="w-[400px] flex flex-col gap-2 px-4">
              <div className="flex justify-between font-bold text-[1rem]">
                <h3>Puma shoe</h3>
                <p>$70</p>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                eos quae facilis nostrum numquam
              </p>
              <div className=" flex justify-between items-center">
                <p className="font-bold">QTY: 1</p>
                {/* <Button color="danger">Remove</Button> */}
                <Tooltip content="Delete item">
                  <div className="text-[red] text-[1.2rem]">
                    <FiTrash />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center text-[1.2rem] font-bold">
              <h3>Subtotal:</h3>
              <p>$300</p>
            </div>
            <p>Shipping and taxes are calculated at checkout</p>
            <Button className="mt-4" size="lg" color="primary">
              Checkout
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
