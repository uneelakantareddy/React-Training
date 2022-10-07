import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductsList.scss";
import SelectedProduct from "./SelectedProduct";

const ProductsList = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showProduct, setShowProduct] = useState(false);
  const [prod, setProd] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function viewProductHandler(product) {
    setShowProduct(true);
    setModalIsOpen(true);
    setProd(product);
    document.body.style.overflow = "hidden";
  }
  // console.log("product", showProduct);
  // console.log(data);

  if (!showProduct) {
    return (
      <div>
        {loading && (
          <div>
            <h1 style={{ color: "red" }}>loading ...</h1>
          </div>
        )}
        ;
        <div className="content-display">
          {data.map((product) => (
            <div key={product.id}>
              <div className="product-img">
                <img
                  className="product-img__images"
                  src={product.image}
                  alt="product-Item"
                />
              </div>
              <div className="product-details">
                <p className="product-details__content">
                  {product.title.slice(0, 38)}
                </p>

                <button
                  className="product-details__button"
                  onClick={() => viewProductHandler(product)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (showProduct) {
    return (
      <div>
        {modalIsOpen && (
          <SelectedProduct
            id={prod.id}
            category={prod.category}
            image={prod.image}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            rating={prod.rating.rate}
          />
        )}
        <button
          className="close-btn"
          onClick={() => {
            document.body.style.overflow = "unset";
            setShowProduct(false);
          }}
        >
          Close Product
        </button>
      </div>
    );
  }
};

export default ProductsList;
