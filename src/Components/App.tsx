import React, { Component, Fragment } from "react";
import Vetclinic from "./Vetclinic/Vetclinic";
import { render } from "react-dom";
import { client, petappoitment, appointment } from "../store";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Vetclinic />
      </Fragment>
    );
  }
}
