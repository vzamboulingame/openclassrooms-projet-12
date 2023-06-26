import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import logo from "../images/header-logo.svg";

/**
 * Login component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  function handleChange(e) {
    setUserId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const path = generatePath("/user/:userId", { userId });
    navigate(path);
  }

  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="Logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="number"
          value={userId}
          onChange={handleChange}
          placeholder="User ID"
          pattern="^[0-9]*$"
          required
        />
        <button className="login-btn" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
