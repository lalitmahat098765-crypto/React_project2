import styles from "./Password.module.css";
function Password({ handleChange }) {
  return (
    <div class="mb-3">
      <label
        for="exampleInputPassword1"
        className={`form - label ${styles.passwordContainer}`}
      >
        Password
      </label>
      <input
        type="password"
        value={formData.password}
        class="form-control"
        name="password"
        id="exampleInputPassword1"
        onChange={handleChange}
      />
    </div>
  );
}
export default Password;
