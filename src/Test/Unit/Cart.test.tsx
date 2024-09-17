import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { useGetProductByIDQuery } from "../../services/Products";
import cartReducer, { addItem, clearCart } from "../../State/Cart";
import Product from "../../pages/Product";
import Cart from "../../components/Molecule/Cart";
import { configureStore } from "@reduxjs/toolkit";
import { act } from "react";

// Mock the product query
jest.mock("../../services/Products", () => ({
  useGetProductByIDQuery: jest.fn(),
}));

// Mock data
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  image: "http://example.com/image.jpg",
  description: "This is a test product.",
  category: "Test Category",
  rating: { rate: 4.5, count: 100 },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

describe("Product and Cart Components", () => {
  beforeEach(() => {
    (useGetProductByIDQuery as jest.Mock).mockReturnValue({
      data: mockProduct,
      error: null,
      isLoading: false,
    });
  });

  afterEach(() => {
    act(() => store.dispatch(clearCart()));
  });

  test("adds item to cart on button click and displays it inside the cart", () => {
    render(
      <Provider store={store}>
        <Product />
        <Cart />
      </Provider>
    );

    act(() => fireEvent.click(screen.getByText("ADD TO CART")));

    const cart = store.getState().cart;

    expect(cart.items.length).toBe(1);
    expect(cart.items[0].title).toBe("Test Product");
  });

  test("removes item from the cart on remove button click", () => {
    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    act(() => fireEvent.click(screen.getByText("Remove")));

    const cart = store.getState().cart;

    expect(cart.items.length).toBe(0);
  });

  test("updates item quantity in the cart", () => {
    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    const { container } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const button = container.querySelector("#quantity-increase");

    if (button) {
      act(() => fireEvent.click(button));
    } else {
      throw new Error("Button not found");
    }

    const cart = store.getState().cart;

    expect(cart.items[0].quantity).toBe(2);
  });

  test("decreases item quantity in the cart", () => {
    store.dispatch(addItem({ ...mockProduct, quantity: 2 }));

    const { container } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const button = container.querySelector("#quantity-decrease");

    if (button) {
      act(() => fireEvent.click(button));
    } else {
      throw new Error("Button not found");
    }

    const cart = store.getState().cart;

    expect(cart.items[0].quantity).toBe(1);
  });
});
