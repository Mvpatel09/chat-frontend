import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./router/router";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AllRoutes />
          <ToastContainer/>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
