import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const RedirectComponent = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Timeout fired!");
      setShouldRedirect(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (shouldRedirect) return <Navigate to="/about/me" />;

  return <p>You are on the wrong page. You will be redirected soon.</p>;
};
