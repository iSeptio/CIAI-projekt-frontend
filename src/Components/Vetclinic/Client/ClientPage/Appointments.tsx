import React from "react";
import MaterialTable, { Column } from "material-table";

interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "ID", field: "id" },
      { title: "Title", field: "title" },
      { title: "Location", field: "location" },
      {
        title: "Description",
        field: "desc"
      },
      { title: "Date", field: "date", type: "date" }
    ],
    data: [
      {
        id: 1,
        title: "wizyta pilna",
        location: "Kotkowo",
        startdate: "2019-11-26",
        enddate: "2019-12-10",
        desc: "Kotek musi być operowany.",
        all_day: false,
        timezone: "UTC",
        repeat: false,
        date: "2019-11-26"
      },
      {
        id: 2,
        title: "wizyta kontrolna",
        location: "Kotkowo",
        startdate: "2019-11-27",
        enddate: "2019-11-17",
        desc: "Wizyta kontrolna, sprawdzenie ogólnego stanu zwierzęcia",
        all_day: false,
        timezone: "UTC",
        repeat: false,
        date: "2019-11-27"
      }
    ]
  });

  return (
    <MaterialTable
      title="Appointment List"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
