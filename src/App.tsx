import "./App.css";
import { Provider } from "react-redux";
import { store } from "./State/Configure";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
