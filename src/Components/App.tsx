import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import { render } from "react-dom";
import Vetclinic from "./Vetclinic";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Vetclinic />
        <Footer />
      </Fragment>
    );
  }
}
