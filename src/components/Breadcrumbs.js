import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  let currentlink = "";
  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentlink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentlink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumb}</div>;
}
