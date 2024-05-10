import React from "react";
import styles from "./Logo.module.css";
import Img from "../../assets/Logo.png"
export default function Logo() {
    return <div className={styles.logo}>
        <img className={styles.logoImg} src={Img} alt="Logo" />
    </div>
}