import { useSelector, useDispatch } from "react-redux";
import "../Css/Cart.css";
import {  removeFromCart ,increaseQty,decreaseQty} from "../Redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="flex cartBox" style={{ backgroundColor: "#ddd" }}>
      {/* Left Section - Item List */}
      <div className="flex-C H-center V-start size100percent cartList boxShadow" style={{ marginTop: '1em', borderRadius: "1em", backgroundColor: "#fff", padding: "1em" }}>
        <summary className='headings flex H-center' style={{ justifyContent: "space-between", width: "100%" }}>
          <h3>Shopping Cart</h3>
          <p>{totalItems} Item{totalItems !== 1 ? "s" : ""}</p>
        </summary>

        {cartItems.length > 0 ? (
          cartItems.map((item) => <ItemDetails key={item.id} item={item} dispatch={dispatch} />)
        ) : (
          <p style={{ marginTop: "2em" }}>🛒 Your cart is empty.</p>
        )}
      </div>

      <hr className='seprator-V' />

      {/* Right Section - Summary */}
      <div className="flex-C H-center V-start cartList size100percent boxShadow" style={{ marginTop: "1em", backgroundColor: "#fff", borderRadius: "1em", padding: "1em", minHeight: "200px" }}>
        <summary className='headings flex H-center' style={{ justifyContent: "center", width: "100%" }}>
          <p>Summary</p>
        </summary>
        <div className="itmes flex" style={{ justifyContent: "space-between", width: "100%", marginTop: "1em" }}>
          <p>Items: {totalItems}</p>
          <p>€ {totalPrice}</p>
        </div>
        <button
  className="checkoutBtn button"
  style={{
    marginTop: "1.5em",
    padding: "0.8em 2em",
    backgroundColor: "#4CAF50", // green background
    color: "#ffffff",            // white text
    fontSize: "1rem",            // readable font size
    fontWeight: "600",
    border: "none",
    borderRadius: "0.5em",
    width: "100%",               // full width if inside a narrow container
    maxWidth: "300px",           // limit width for larger screens
    textAlign: "center",
    cursor: "pointer",
    whiteSpace: "nowrap",        // prevent wrapping
    overflow: "hidden",          // hide overflow if any
    textOverflow: "ellipsis",    // add "..." if it overflows
  }}
>
  🛍️ Proceed to Checkout
</button>

      </div>
    </div>
  );
}

// =========================
// Item Details Component
function ItemDetails({ item, dispatch }) {
  return (
    <>
      <div className="cartItems flex" style={{ alignItems: "center", padding: "1em 0" }}>
        <div className="img width6em">
          <img src={item.thumbnail} alt={item.title} style={{ width: "100%", borderRadius: "0.5em" }} />
        </div>

        <div className="Name width6em" style={{ paddingLeft: "1em" }}>
          <p className="type" style={{ fontWeight: "bold", fontSize: "0.9em" }}>{item.category || "Category"}</p>
          <p className="ItemName" >{item.title}</p>
        </div>

        <div className="qt width6em flex" style={{ margin: "auto 1em" }}>
          <button type="button" className='xbutton' onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <p className="value xbutton">{item.quantity}</p>
          <button type="button" className='xbutton' onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        </div>

        <p className="price width6em">€ {(item.price * item.quantity).toFixed(2)}</p>

        <button className="close boxShadow xbutton" onClick={() => dispatch(removeFromCart(item.id))}>x</button>
      </div>
      <hr className="seprator-H" />
    </>
  );
}

export default Cart;
