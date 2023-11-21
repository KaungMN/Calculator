import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      The page is not found!
      <br />
      <p>
        Please go to the <Link to="/">Home page</Link>.
      </p>
    </div>
  );
}

export default Notfound;
