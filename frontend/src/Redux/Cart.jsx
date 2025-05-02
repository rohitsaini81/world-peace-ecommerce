import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} width="50" />
              <p>{item.title} - ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>❌ Remove</button>
            </div>
          ))}
          <button onClick={() => dispatch(clearCart())}>🗑 Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
