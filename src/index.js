import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "./styles.css"; -> 이러면 전역적인 파일 하나로 인해 모든 요소가 바뀜. 그래서 "분할"하고 "정복"해야함. -> css 모듈화

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
