import Products from "@/components/Products";
import Recommended from "@/components/Recommended";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Recommended />
      <Products />
    </>
  );
}
