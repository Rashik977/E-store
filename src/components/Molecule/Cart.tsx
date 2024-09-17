import { useEffect, useState } from "react";
import { RootState } from "../../State/Configure";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "../../State/Cart";
import Image from "../Atomic/Image";
import { ErrorBoundary } from "react-error-boundary";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const toggleCart = () => setIsOpen(!isOpen);

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  useEffect(() => {
    const cartButton = document.querySelector("#cart");
    cartButton?.addEventListener("click", toggleCart);
  }, []);

  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {/* Sliding Cart */}
        <div className={`cart-container ${isOpen ? "open" : ""}`}>
          {/* Close button */}
          <button className="cart-close-btn" onClick={toggleCart}>
            &times;
          </button>

          <h2>Your Cart</h2>

          {/* Cart Items */}
          <div className="cart-items">
            {cart.items.length > 0 ? (
              cart.items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <Image src={`${item.image}`} alt={`${item.title}`} />
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-details">
                      <h5>{item.title}</h5>
                      <p>
                        ${item.price} x {item.quantity}
                      </p>
                      <p
                        className="cart-remove"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </p>
                    </div>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        id="quantity-decrease"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                        id="quantity-increase"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty-cart">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Total */}
          <div className="cart-total">
            <h4>Subtotal: ${cart.totalAmount.toFixed(2)}</h4>
            <button
              className="checkout-btn"
              disabled={cart.items.length === 0}
              onClick={() => alert("Proceed to Checkout")}
            >
              Continue to Checkout
            </button>
            <button
              className="clear-cart-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Cart;
