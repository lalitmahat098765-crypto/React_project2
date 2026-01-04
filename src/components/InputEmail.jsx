import styles from "./InputEmail.module.css";
function InputEmail({ handleChange }) {
  return (
    <div class={`mb - 3 ${styles.inputContainer}`}>
      <label for="exampleInputEmail1" class="form-label">
        Email address
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={handleChange}
      />
      <div id="emailHelp" className={`form - text ${styles.textContainer}`}>
        We'll never share your email with anyone else.
      </div>
    </div>
  );
}

export default InputEmail;
