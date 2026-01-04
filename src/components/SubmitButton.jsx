import styles from "./SubmitButton.module.css";
function SubmitButton({ handleSubmitButton }) {
  return (
    <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
      Submit
    </button>
  );
}
export default SubmitButton;
