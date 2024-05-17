import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className="row text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="location">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col">
              <div className="content-around-web">
                <h3>AROUND THE WEB</h3>
                <ul className="socail-icons list-unstyled d-flex  justify-content-center gap-3">
                  <li>
                    <a
                      className="border rounded-circle p-2 text-decoration-none d-flex justify-content-center align-items-center "
                      href="https://www.facebook.com/"
                    >
                      <i className="text-white fs-6 fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="border rounded-circle p-2 text-decoration-none d-flex justify-content-center align-items-center"
                      href="https://twitter.com/"
                    >
                      <i className="text-white fs-6 fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="border rounded-circle p-2 text-decoration-none d-flex justify-content-center align-items-center"
                      href="https://linkedin.com/"
                    >
                      <i className="text-white fs-6 fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="border rounded-circle p-2 text-decoration-none d-flex justify-content-center align-items-center"
                      href="https://www.youtube.com/"
                    >
                      <i className="text-white fs-6 fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="about-freelance">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by ABM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.endfoot}>Copyright &copy; Your Website 2021</div>
    </>
  );
}
