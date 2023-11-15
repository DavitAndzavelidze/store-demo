import { Button } from "@nextui-org/react";

const Recommended = () => {
  return (
    <div className="ml-[15rem] py-4 flex flex-col gap-2">
      <h2 className="font-bold text-[1.3rem]">Recommended</h2>
      <div className="flex gap-2">
        <Button
          className="border py-2 px-5 rounded-lg "
          color="default"
          variant="light"
        >
          All Products
        </Button>
        <Button
          className="border py-2 px-5 rounded-lg "
          color="default"
          variant="light"
        >
          Nike
        </Button>
        <Button
          className="border py-2 px-5 rounded-lg "
          color="default"
          variant="light"
        >
          Adidas
        </Button>
        <Button
          className="border py-2 px-5 rounded-lg "
          color="default"
          variant="light"
        >
          Puma
        </Button>
        <Button
          className="border py-2 px-5 rounded-lg "
          color="default"
          variant="light"
        >
          Vanse
        </Button>
      </div>
    </div>
  );
};

export default Recommended;
