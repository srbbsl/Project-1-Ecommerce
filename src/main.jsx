import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const div = document.getElementById("root");

if(div) {
    const root = ReactDOM.createRoot(div);
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)
} else {
    console.log("Please select div 1st....");
}