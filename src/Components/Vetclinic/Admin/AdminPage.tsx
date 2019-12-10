import "./AdminPage.css";
import "./material.css";
import React, { Component, Fragment } from "react";
import VetManagement from "./AdminPage/VetManagement";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <div className="div1">VetClinic Admin Panel</div>
        <div className="div2">
          <VetManagement />
        </div>
        <div className="div3">a</div>
      </Fragment>
    );
  }
}
