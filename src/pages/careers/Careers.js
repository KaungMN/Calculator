import { useLoaderData, Link, useNavigate, NavLink } from "react-router-dom";
function Careers() {
  const careers = useLoaderData();
  const nagivate = useNavigate();
  const handleDelete = (id) => {
    fetch("http://localhost:4000/careers/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(handleDelete),
    })
      .then((res) => {
        alert("Deleted successfully.");
        nagivate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="careers">
      <p>Are you looking for these jobs?</p>
      {careers.map((career) => (
        <div className="careers-wrapper" key={career.id}>
          <div>
            <Link to={career.id.toString()}>
              <p>{career.title}</p>
            </Link>
            <p>Base in {career.location}</p>
          </div>

          <div>
            <NavLink to="update_career">
              <button className="career-root-input">Update</button>
            </NavLink>
            <button
              className="career-root-input"
              onClick={() => handleDelete(career.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Careers;

export const careerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }
  return res.json();
};
