import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectComponent2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout fired!");
      navigate("/about");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <p>You are on the wrong page. You will be redirected soon.</p>;
};
