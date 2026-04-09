import { useLocation, useSearchParams } from "react-router-dom";

export const Payment = () => {
  const [params] = useSearchParams();
  const location = useLocation();

  console.log('location', location);

  const paymentId = params.get("paymentId");

  if (!paymentId) return <p>Payment incorrect</p>;

  return <p>Payment [{paymentId}]</p>;
};
