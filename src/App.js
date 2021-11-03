import Home from "./screens/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center bg-kineduLightGray ">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
