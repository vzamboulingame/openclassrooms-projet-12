import bikeLogo from "../images/bike-logo.svg";
import dumbbellLogo from "../images/dumbbell-logo.svg";
import swimmingLogo from "../images/swimming-logo.svg";
import yogaLogo from "../images/yoga-logo.svg";

/**
 * Sidebar component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-filler"></div>
      <nav className="sidebar-nav">
        <a className="sidebar-nav-logo" href="#">
          <img src={yogaLogo} alt="Yoga Logo" />
        </a>
        <a className="sidebar-nav-logo" href="#">
          <img src={swimmingLogo} alt="Swimming Logo" />
        </a>
        <a className="sidebar-nav-logo" href="#">
          <img src={bikeLogo} alt="Bike Logo" />
        </a>
        <a className="sidebar-nav-logo" href="#">
          <img src={dumbbellLogo} alt="Dumbbell Logo" />
        </a>
      </nav>
      <p className="sidebar-text">Copyright, SportSee 2023</p>
    </aside>
  );
}
