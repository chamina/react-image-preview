import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import FilterLayout from "./components/search/FilterLayout";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterLayout />
      </div>
    </Provider>
  );
}

export default App;
