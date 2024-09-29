import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Contact Book</h1>
      <p>Manage your contacts efficiently!</p>
    </div>
  );
}

export default HomePage;
