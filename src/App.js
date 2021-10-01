import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container col-auto">
        <div className="card">
          <div className="card-body">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
