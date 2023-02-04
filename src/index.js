import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//아래처럼 StrictMode 로 감싸져있을 경우 자손까지 검사하기 때문에 기본적으로 렌더링이 두 번 실행된다
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
