import React from "react";
import styles from "./Linestar.module.css";

export default function Linestar(props) {
  console.log(props);
  const { heading, color } = props;
  return (
    <>
      <div className="py-4 text-center">
        <h2 style={{ color: color }} className="fw-bold">
          {heading}
        </h2>
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <div
            className={styles.before}
            style={{ backgroundColor: color }}
          ></div>
          <i className="fs-5 fa-solid fa-star"></i>
          <div
            className={styles.after}
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </>
  );
}
