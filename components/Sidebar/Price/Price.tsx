// const priceList = ["$0-$50", "$50-$100", "$100-$150", "Over-$150"];

import { Slider } from "@nextui-org/react";

export default function Price() {
  return (
    <div className="w-[10rem] py-4">
      <h2 className="text-[1.2rem]">Price</h2>
      <Slider
        size="sm"
        label="range"
        minValue={0}
        maxValue={200}
        defaultValue={[0, 50]}
        formatOptions={{ style: "currency", currency: "USD" }}
        className="w-full "
      />
    </div>
  );
}

// const Price = () => {
//   return (
//     <div className="flex flex-col gap-1 py-4">
//       <h2 className="text-[1.2rem]">Price</h2>
//       <div className="flex flex-col ">
//         <label className="flex items-center gap-2">
//           <input type="range" name="range" id="range" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Price;
