// const ColorList = ["All", "Black", "Blue", "Red", "Green", "White"];
import { RadioGroup, Radio } from "@nextui-org/react";

const Colors = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[1.2rem]">Colors</h2>
      <div className="flex flex-col ">
        <RadioGroup defaultValue="all" size="sm" className="text-[1.2rem] ">
          <Radio value="all">All</Radio>
          <Radio value="black">Black</Radio>
          <Radio value="blue">Blue</Radio>
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="white">White</Radio>
        </RadioGroup>
        {/* {ColorList.map((price, index) => (
          <label key={index} className="flex items-center gap-2">
            <input type="radio" name="radio" id="radio" />
            <span>{price}</span>
          </label>
        ))} */}
      </div>
    </div>
  );
};

export default Colors;
