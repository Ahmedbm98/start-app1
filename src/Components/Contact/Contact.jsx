import React, { Component } from "react";
import Linestar from "../HeadingandLineStar/Linestar";
import styles from "./Contact.module.css";

export default class Contact extends Component {
  changeLabel(e) {
    // console.log(e.target);
    let prevEle = e.target.previousElementSibling;
    if (e.target.value !== "") {
      prevEle.style = `opacity: 1; transform: translate(5px,-5px)`;
    } else {
      prevEle.style = `opacity: 0; transform: translate(5px,30px)`;
    }
  }

  btnPreventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <div className={`${styles.contact} py-5 w-50 mx-auto`}>
          <Linestar heading="CONATCT SECTION" color="#2C3E50" />
          <div className="row" onChange={this.changeLabel}>
            <form action="#">
              <div className="mb-4">
                <label htmlFor="name">userName</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="userName"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age">userAge</label>
                <input
                  type="number"
                  name="Age"
                  placeholder="userAge"
                  id="age"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email">userEmail</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="userEmail"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">userPassword</label>
                <input
                  type="password"
                  name="Password"
                  placeholder="userPassword"
                  id="password"
                  className="form-control"
                />
              </div>
              <button
                className="btn btn-success text-white"
                onClick={this.btnPreventDefault}
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
