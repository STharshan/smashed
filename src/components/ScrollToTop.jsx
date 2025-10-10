import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever this component mounts or path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;
