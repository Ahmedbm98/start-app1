import React, { Component } from "react";
import Linestar from "../HeadingandLineStar/Linestar";
import styles from "./About.module.css";

export default class About extends Component {
  render() {
    return (
      <>
        <div className={styles.about}>
          <div className="container">
            <Linestar heading="ABOUT COMPONENT" color="#fff" />
            <div className="row row-cols-1 row-cols-sm-2">
              <div className="col">
                <p className="content">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
