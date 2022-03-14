import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigation from "./src/routes";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Navigation />
      </ToastProvider>
    </Provider>
  );
}
