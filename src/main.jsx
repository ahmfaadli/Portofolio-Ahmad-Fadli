import { StrictMode, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

import "remixicon/fonts/remixicon.css";

function ScrollHandler() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Untuk halaman baru yang dibuka melalui Link / navigate
    if (navigationType === "PUSH") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [pathname, navigationType]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollHandler />

      <Navbar />

      <App />
    </BrowserRouter>
  </StrictMode>
);