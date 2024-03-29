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
        name: "filemon",
        species: "cat"
      },
      {
        id: 2,
        name: "garfield",
        species: "cat"
      },
      {
        id: 3,
        name: "burek",
        species: "dog"
      },
      {
        id: 4,
        name: "lipton",
        species: "dog"
      }
    ]
  });

  return (
    <MaterialTable
      title="Pet List"
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
