import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pagenotfound.module.css";
export default function PageNotFound() {
  return (
    <>
      <div className={styles.mainbox}>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className={styles.err}>4</div>
          <i class={`${styles.far} fa-solid fa-question `}></i>
          <div className={styles.err2}>4</div>
        </div>
        <div className={styles.msg}>
          This Page Is Not Exist
          <p>
            Let's go{" "}
            <Link to="" className="text-decoration-none text-muted">
              Home
            </Link>{" "}
            and try from there.
          </p>
        </div>
      </div>
    </>
  );
}
