import AddEmailPassword from "./components/AddEmailPassword";
import styles from "./App.module.css";
import { useState } from "react";
import { UserDataContext } from "./store/EmailPasswordContext";
import UserProfiles from "./components/UserProfiles";
function App() {
  const [formData, setFormData] = useState([]);

  const addNewUser = (newEmail, newPassword) => {
    setFormData((previous) => [
      ...previous,
      {
        email: newEmail,
        password: newPassword,
      },
    ]);
  };

  return (
    <UserDataContext.Provider value={{ formData, addNewUser }}>
      <div className={styles.container}>
        <AddEmailPassword />
      </div>
      <UserProfiles />
    </UserDataContext.Provider>
  );
}

export default App;
