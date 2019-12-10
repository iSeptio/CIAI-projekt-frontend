import React, { Component, Fragment } from "react";
import Vetclinic from "./Vetclinic/Vetclinic";
import { render } from "react-dom";
import { client, petappoitment, appointment } from "../store";
import { BrowserRouter, Route } from "react-router-dom";
import ClientPage from "./Vetclinic/Client/ClientPage";
import AdminPage from "./Vetclinic/Admin/AdminPage";
import VeterinarianPage from "./Vetclinic/Veterinarian/VeterinarianPage";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Vetclinic />
          <Route path="/client" exact component={ClientPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/vet" exact component={VeterinarianPage} />
        </BrowserRouter>
      </Fragment>
    );
  }
}
