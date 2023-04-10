import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
import "./style.css";

const rootElem = document.createElement("div");
rootElem.id = "root";
document.body.appendChild(rootElem);
const root = ReactDOM.createRoot(rootElem);
root.render(<RouteSwitch/>);
