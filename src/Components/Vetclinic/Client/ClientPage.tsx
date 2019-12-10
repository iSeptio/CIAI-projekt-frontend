import "./ClientPage.css";
import "./material.css";
import React, { Component, Fragment } from "react";
import { AppointmentList, PetList, Appointments } from "./ClientPage/index";
import { client, petappoitment, appointment } from "../store";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month
} from "@syncfusion/ej2-react-schedule";

export default class extends Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Ill Kitten",
        StartTime: new Date(2018, 1, 16, 10, 0),
        EndTime: new Date(2018, 1, 16, 12, 30),
        IsAllDay: false,
        Status: "Non-Completed operation",
        Priority: "High"
      },
      {
        Id: 2,
        Subject: "Operation of a Horse",
        StartTime: new Date(2018, 1, 15, 9, 0),
        EndTime: new Date(2018, 1, 15, 10, 30),
        IsAllDay: false,
        Status: "Completed",
        Priority: "High"
      },
      {
        Id: 2,
        Subject: "Dog sterilization",
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false,
        Status: "Completed",
        Priority: "High"
      }
    ];
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="banner">Vet Clinic For Clients</div>

          <div className="petlist">
            <Appointments />
          </div>
          <div className="calendar">
            return{" "}
            <ScheduleComponent
              height="550px"
              selectedDate={new Date(2018, 1, 15)}
              eventSettings={{
                dataSource: this.data,
                fields: {
                  id: "Id",
                  subject: { name: "Subject" },
                  isAllDay: { name: "IsAllDay" },
                  startTime: { name: "StartTime" },
                  endTime: { name: "EndTime" }
                }
              }}
            >
              <Inject services={[Day, Week, WorkWeek, Month]} />
            </ScheduleComponent>
          </div>
        </div>
      </Fragment>
    );
  }
}
