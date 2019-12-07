import React, { Component, Fragment } from "react";
import { AppointmentList, PetList } from "./ClientPage/index";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <AppointmentList />
        <PetList />
      </Fragment>
    );
  }
}
