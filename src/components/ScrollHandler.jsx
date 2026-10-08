import { useLayoutEffect } from "react";
import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

export default function ScrollHandler() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
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