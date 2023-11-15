import Image from "next/image";

interface Props {
  params: {
    id: string;
    title: string;
  };
}

const SingleProductPage = ({ params }: Props) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-[2rem]">
      {/* {params.id} */}
    </div>
  );
};

export default SingleProductPage;
