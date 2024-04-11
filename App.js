import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { MyNavigation } from "./Navigation";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <MyNavigation />
      </PersistGate>
    </Provider>
  );
}
