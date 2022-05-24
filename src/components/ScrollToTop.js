import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

{/* This is our component scroll to top. We basically
tell the page in the code to scroll to location 0,0 
which is at the top of the page */}
