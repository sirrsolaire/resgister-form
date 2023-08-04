import { useState } from "react";
import "./index.css";

export default function App() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleFirstName(e) {
    setValue({ ...value, firstName: e.target.value });
  }
  function handleLastName(e) {
    setValue({ ...value, lastName: e.target.value });
  }
  function handleEmail(e) {
    setValue({ ...value, email: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setError(true);
    }
    setSuccess(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {success && error ? (
          <div class="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={value.firstName}
          onChange={handleFirstName}
        />
        {/* Uncomment the next line to show the error message */}
        {success && !value.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : (
          ""
        )}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={value.lastName}
          onChange={handleLastName}
        />
        {/* Uncomment the next line to show the error message */}
        {success && !value.firstName ? (
          <span id="first-name-error">Please enter a last name</span>
        ) : (
          ""
        )}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="example@gmail.com"
          name="email"
          value={value.email}
          onChange={handleEmail}
        />
        {/* Uncomment the next line to show the error message */}
        {success && !value.firstName ? (
          <span id="first-name-error">Please enter an email address</span>
        ) : (
          ""
        )}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
