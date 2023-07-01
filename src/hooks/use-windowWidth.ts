import { useState, useEffect } from "react";

type WindowWidth = number | null;

const useWindowWidth = (): WindowWidth => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    
    // Set initial window width
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
