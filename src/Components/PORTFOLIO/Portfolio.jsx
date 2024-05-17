import React, { Component } from "react";
import poert1 from "../../assets/imgs/poert1.png";
import poert2 from "../../assets/imgs/port2.png";
import poert3 from "../../assets/imgs/port3.png";
import Linestar from "../HeadingandLineStar/Linestar";
import "./Portfolio.css";

export default class Portfolio extends Component {
  // Open Box Modal
  openModal(e) {
    // console.log(e.target);
    let boxContainer = document.querySelector(".box-container");
    let eleClicked = e.target.closest(".content-portfolio");
    let imgBox = document.querySelector(".box-container .box img");

    if (eleClicked !== null) {
      boxContainer.classList.replace("d-none", "d-flex");
      let imgSrc = eleClicked.querySelector(".image img").getAttribute("src");
      imgBox.setAttribute("src", imgSrc);
    }
  }

  // Hidden Box Modal
  closeModal(e) {
    let boxModal = document.querySelector(".box-container");
    // console.log(boxModal);
    if (e.target === boxModal) {
      boxModal.classList.replace("d-flex", "d-none");
    }
  }

  render() {
    return (
      <>
        <div className="pt-5">
          <Linestar heading="PORTFOLIO COMPONENT" color="#2C3E50" />
          <div className="container">
            <div
              className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-3"
              onClick={this.openModal}
            >
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert1}
                      className="w-100 d-block rounded"
                      alt="poert1"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert2}
                      className="w-100 d-block rounded"
                      alt="poert2"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert3}
                      className="w-100 d-block rounded"
                      alt="poert3"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert1}
                      className="w-100 d-block rounded"
                      alt="poert1"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert2}
                      className="w-100 d-block rounded"
                      alt="poert2"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-portfolio ">
                  <div className="image">
                    <img
                      src={poert3}
                      className="w-100 d-block rounded"
                      alt="poert3"
                    />
                  </div>
                  <div className="overlay rounded">
                    <i className=" fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-container d-none" onClick={this.closeModal}>
            <div className="box">
              <img src="" className="w-100 d-block rounded" alt="poert1" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
