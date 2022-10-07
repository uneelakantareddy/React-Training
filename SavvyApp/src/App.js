import Header from "./Basic Coponents/Header";
import "./App.scss";
import ProductsList from "./Products/ProductsList";
import SelectedProduct from "./Products/SelectedProduct";
import Background from "./Basic Coponents/Background";
const App = () => {
  return (
    <div className="bg-container">
      <Header />
      <Background />

      <ProductsList />
    </div>
  );
};
export default App;
