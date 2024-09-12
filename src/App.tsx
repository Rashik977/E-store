import "./App.css";
import { Provider } from "react-redux";
import { persistor, store } from "./State/Configure";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
