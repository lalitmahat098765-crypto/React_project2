import { useContext } from "react";
import { UserDataContext } from "../store/EmailPasswordContext";
import styles from "./Card.module.css";
import Card from "./Card";
function UserProfiles() {
  const { formData } = useContext(UserDataContext);
  return (
    <center>
      {Object.entries(formData).map(([key, value]) => (
        <Card key={key} value={value}></Card>
      ))}
    </center>
  );
}

export default UserProfiles;
