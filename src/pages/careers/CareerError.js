import { useRouteError, Link } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Career Not Found</h2>
      <p>{error.message}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
