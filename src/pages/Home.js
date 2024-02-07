import NavBar from "../features/navbar/Navbar.js";
import ProductList from "../components/ProductList.js.js";

export default function Home() {
  return (
    <NavBar>
      <ProductList></ProductList>
    </NavBar>
  );
}
