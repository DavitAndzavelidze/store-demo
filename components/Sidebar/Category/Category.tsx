import { RadioGroup, Radio } from "@nextui-org/react";

// const categoryList = ["All", "Sneakers", "Flats", "Sandals", "Heels"];

const Category = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[1.2rem]">Category</h2>
      <RadioGroup defaultValue="all" size="sm" className="text-[1.2rem]">
        <Radio value="all">All</Radio>
        <Radio value="sneakers">Sneakers</Radio>
        <Radio value="flats">Flats</Radio>
        <Radio value="sandals">Sandals</Radio>
        <Radio value="heels">Heels</Radio>
      </RadioGroup>
    </div>
  );
};

export default Category;

{
  /* <h2 className="text-[1.2rem]">Category</h2>
      <div className="flex flex-col ">
        {categoryList.map((category, index) => (
          <label key={index} className="flex items-center gap-2">
            <input type="radio" name="radio" id="radio" />
            <span>{category}</span>
          </label>
        ))}
      </div> */
}
