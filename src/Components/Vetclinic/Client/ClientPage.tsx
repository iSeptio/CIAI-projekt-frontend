import "./ClientPage.css";
import React, { Component, Fragment } from "react";
import { AppointmentList, PetList } from "./ClientPage/index";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month
} from "@syncfusion/ej2-react-schedule";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="div1">Vet Clinic For Clients</div>
          <div className="div2">list of vets</div>
          <div className="div3">list of pets</div>
          <div className="div4">
            <ScheduleComponent>
              <Inject services={[Day, Week, WorkWeek, Month]} />
            </ScheduleComponent>
          </div>
        </div>

        <AppointmentList />
        <PetList />
      </Fragment>
    );
  }
}
