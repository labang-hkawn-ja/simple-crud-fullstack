import { Link } from "react-router-dom";
import { BiSolidFactory } from "react-icons/bi";

export default function HeaderComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark text-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <BiSolidFactory size={30} />
          </Link>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNav"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employee-form" className="nav-link">
                  Employee Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
