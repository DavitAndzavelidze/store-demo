import Image from "next/image";
import Img1 from "@/public/1.png";
import { Button } from "@nextui-org/react";
import { CiStar } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

const ProductSingle = () => {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center gap-6 absolute top-0 left-0 z-[-1]">
        <div className="flex flex-col justify-start items-start gap-4 h-[500px]">
          <div className="w-[150px] h-[150px] bg-slate-200 flex justify-center items-center rounded-lg">
            <Image
              src={Img1}
              width={80}
              height={80}
              alt="shoe"
              className="object-cover w-auto "
            />
          </div>
          <div className="w-[150px] h-[150px] bg-slate-200 flex justify-center items-center rounded-lg">
            <Image
              src={Img1}
              width={80}
              height={80}
              alt="shoe"
              className="object-cover w-auto "
            />
          </div>
          <div className="w-[150px] h-[150px] bg-slate-200 flex justify-center items-center rounded-lg">
            <Image
              src={Img1}
              width={80}
              height={80}
              alt="shoe"
              className="object-cover w-auto "
            />
          </div>
        </div>
        <div className="bg-slate-200 px-4 py-16 h-[500px] w-[500px] flex justify-center items-center rounded-lg">
          <Image
            src={Img1}
            width={300}
            height={300}
            alt="shoe"
            className="object-cover w-auto "
          />
        </div>
        <div className="flex flex-col gap-4 py-4  h-[500px]">
          <h2 className="text-[34px] font-bold">Nike Shoe 2023</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-blue-700 text-white w-[55px] px-2 py-1 rounded-xl">
              <p>4.2</p>
              <span>
                <CiStar />
              </span>
            </div>
            <span className="text-slate-500 text-[14px]">34 Rating</span>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-[20px] font-bold">$200</h3>
              <del className="text-red-500">$240</del>
            </div>
            <div className="flex  items-center gap-2 text-slate-500">
              <span className="text-[22px]">
                <CiDeliveryTruck />
              </span>
              <p>2-5 Day Shipping</p>
            </div>
          </div>

          <div className="flex gap-2 pb-4">
            <Button color="primary">Add to Cart</Button>
            <Button>Checkout Now</Button>
          </div>
          <p className="w-[400px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            pariatur vel veritatis blanditiis ullam, recusandae quos sed nemo
            nihil excepturi? Error voluptates quia officiis dolor magnam dicta,
            eaque similique iure?
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductSingle;
