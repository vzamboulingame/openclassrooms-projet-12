import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import logo from "../images/header-logo.svg";
import { apiUrl } from "../utils/apiUrl";

/**
 * Login component.
 *
 * @param {void}
 * @returns {JSX.Element} - Rendered component.
 */
export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const userUrl = `${apiUrl}/user/${userId}`;

  function handleChange(e) {
    setUserId(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(userUrl)
      .then((response) => {
        if (response.ok) {
          const path = generatePath("/user/:userId", { userId });
          navigate(path);
        } else {
          navigate("/notfound");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
