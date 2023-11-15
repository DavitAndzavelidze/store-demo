import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = () => {
  return (
    <section className="fixed p-12">
      <Category />
      <Price />
      <Colors />
    </section>
  );
};

export default Sidebar;
