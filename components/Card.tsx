import Image from "next/image";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ProductData from "@/database/data";
import Link from "next/link";

const Card = () => {
  return (
    <>
      {ProductData.map((product, index) => (
        <Link key={index} href="/product">
          <div className="border inline-block p-4 dark:bg-slate-700/75 rounded-lg">
            <div className="w-[200px] h-[200px] flex justify-center items-center">
              <Image
                src={product.img}
                width={200}
                height={200}
                alt="shoe"
                className="object-cover w-auto hover:scale-[1.1] duration-150"
              />
            </div>
            <div className="flex flex-col gap-2 py-4 px-2">
              <h3 className="font-bold">{product.title}</h3>
              <div className="text-yellow-500 flex items-center">
                {product.star}
                {product.star}
                {product.star}
                {product.star}
                <span className="text-black dark:text-white pl-2">
                  {product.reviews}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <del>{product.prevPrice}</del> {product.newPrice}
                </div>
                <div className="flex gap-4">
                  <FiHeart />
                  <FaCartArrowDown />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
