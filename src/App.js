import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container col-auto">
        <div className="card">
          <div className="card-body">
            <Weather defaultCity="Penrith" />
          </div>
        </div>
        <footer className="openSourceCode">
          <a
            href="https://github.com/chloedentrinos/weather-app"
            target="_blank"
            rel="noreferrer"
            className="openSourceCodeLink"
          >
            Open-source code
          </a>
          , by Chloe Dentrinos
        </footer>
      </div>
    </div>
  );
}

export default App;
