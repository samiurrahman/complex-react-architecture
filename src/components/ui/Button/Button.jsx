import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button" }) => (
  <button className={styles.btn} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
