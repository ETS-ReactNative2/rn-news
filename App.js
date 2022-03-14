import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Navigation from "./src/routes";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
