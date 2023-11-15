import Card from "./Card";

const Products = () => {
  return (
    <section className="ml-[15rem] grid grid-cols-1 md:grid-cols-2 auto-cols-max auto-rows-max gap-4 py-8 lg:grid-cols-3 xl:grid-cols-6">
      <Card />
    </section>
  );
};

export default Products;
