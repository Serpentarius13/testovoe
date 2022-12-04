import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const model = [
  {
    paramId: 1,
    value: "daily",
  },
  {
    paramId: 2,
    value: "max",
    type: "number",
  },
];

const params = [
  {
    id: 1,
    name: "target",
    type: "text",
  },
  {
    id: 2,
    name: "length",
    type: "time",
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App params={params} model={{ paramValues: model }} />
  </React.StrictMode>
);
