// import InputEmail from "./components/InputEmail";
// import Password from "./components/Password";
// import SubmitButton from "./components/SubmitButton";
import styles from "./App.module.css";
import { useState } from "react";
import IncreaseDecrease from "./components/IncreaseDecrease";
function App() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const OnClickSubmitButton = (event) => {
  //   event.preventDefault();
  //   console.log(event);
  // };

  return (
    <div className={styles.container}>
      {/* <form onSubmit={OnClickSubmitButton}>
        <InputEmail handleChange={HandleChange} />
        <Password handleChange={HandleChange} />
        <SubmitButton />
      </form> */}
      <IncreaseDecrease />
    </div>
  );
}

export default App;
