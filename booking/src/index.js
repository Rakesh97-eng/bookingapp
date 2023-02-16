import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Searchcontextprovider } from "./cotext/context";
import { Authcontextprovider } from "./cotext/authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authcontextprovider>
    <Searchcontextprovider>
    <App />
    </Searchcontextprovider>
    </Authcontextprovider>  
  </React.StrictMode>
);
