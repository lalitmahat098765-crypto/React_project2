import { useRef, useContext } from "react";
import styles from "./AddEmailPassword.module.css";
import { UserDataContext } from "../store/EmailPasswordContext";
function AddEmailPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { addNewUser } = useContext(UserDataContext);

  const OnClickSubmitButton = (event) => {
    event.preventDefault();
    const newEmail = emailRef.current.value;
    const newPassword = passwordRef.current.value;
    emailRef.current.value = "";
    passwordRef.current.value = "";
    addNewUser(newEmail, newPassword);
  };
  return (
    <form onSubmit={OnClickSubmitButton}>
      <div className={`mb - 3 ${styles.inputContainer}`}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autoComplete="current-email"
        />
        <div id="emailHelp" className={`form - text ${styles.textContainer}`}>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className={`form - label ${styles.passwordContainer}`}
        >
          Password
        </label>
        <input
          type="password"
          ref={passwordRef}
          className="form-control"
          name="password"
          id="exampleInputPassword1"
          autoComplete="current-password"
        />
      </div>
      <button
        type="submit"
        className={`btn btn-primary ${styles.submitButton}`}
      >
        Submit
      </button>
    </form>
  );
}

export default AddEmailPassword;
