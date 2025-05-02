import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice.jsx";
import "../Css/Card.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const { id, imgURL, title, price, category } = props.Data;

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent anchor tag from navigating
    const item = { id, image: imgURL, title, price, category };
    dispatch(addToCart(item));
  };

  return (
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src={imgURL} alt={title} />
        </div>
        <div className="contentBx">
          <h3>{title}</h3>
          <span>Iconic Ukrainian national trident symbol</span>
        </div>
      </div>
      <ul className="sci">
        <li>
          <i className="fa fa-wikipedia-w"></i>
        </li>
        <li>
          {props.type === "collections" ? (
            <span className="lineEffect"></span>
          ) : (
            <a
              className="button"
              style={{ padding: "10px 22px" }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy
            </a>
          )}
        </li>
        <li>
          {props.type === "collections" ? (
            <span></span>
          ) : (
            <a
              className="button"
              style={{ padding: "10px 22px" }}
              href="#"
              onClick={handleAddToCart}
            >
              Add to Cart
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}
