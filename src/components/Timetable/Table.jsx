/*import React, { useState } from 'react'
import { useTable } from 'react-table'
import makeData from './Makedata'
import Editable from './Editable'
import "./Timetable.scss"
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
      <div className="tt">
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Class',
        columns: [
          {
            Header: 'Monday',
            accessor: 'monday',
          },
          {
            Header: 'Tuesday',
            accessor: 'tuesday',
          },

          {
            Header: 'Wednesday',
            accessor: 'wednesday',
          },

          {
            Header: 'Thursday',
            accessor: 'Thursday',
          },

          {
            Header: 'Friday',
            accessor: 'Friday',
          },
        ],
      },
  
    ],
    []
  )

  const data = React.useMemo(() => makeData(9), [])


  
  const [task, setTask] = useState("");

  return (
      <Table columns={ columns } data={data} />
  )
}

export default App
*//*
import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";
import "./Table.scss"
import styles from  "./styles"
import Timetable from "react-timetable-events";
//import styles from "./styles";

export default class Tiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timetableProps: {
        events: {
          monday: [
            {
              id: 1,
              name: "CO659 Computational Creativity",
              type: "LECTURE",
              taughBy: "Johnson Dr C",
              location: "DLT1",
              startTime: moment("2020-03-23T15:00:00"),
              endTime: moment("2020-03-23T16:00:00")
            }
          ],
          tuesday: [
            {
              id: 2,
              name: "CO641 Computer Graphics and Animation",
              type: "LECTURE",
              taughBy: "Kenny Dr P",
              location: "CHLT",
              startTime: moment("2020-03-23T11:00:00"),
              endTime: moment("2020-03-23T12:00:00")
            },
            {
              id: 3,
              name: "CO659 Group 3 Computational Creativity",
              type: "SEMINAR",
              taughBy: "Ribeiro C",
              location: "CNWSR5",
              startTime: moment("2020-03-23T16:00:00"),
              endTime: moment("2020-03-23T17:00:00")
            },
            {
              id: 4,
              name: "CO659 Group 3 Computational Creativity",
              type: "SEMINAR",
              taughBy: "Ribeiro C",
              location: "CNWSR5",
              startTime: moment("2020-03-23T16:00:00"),
              endTime: moment("2020-03-23T17:00:00")
            },
          ],
          wednesday: [],
          thursday: [],
          friday: []
        },
        hoursInterval: [9, 19],
        timeLabel: "Time",
        renderHour(hour, defaulAttributes, styles) {
          return (
            <div {...defaulAttributes} key={hour}>
              {hour}
            </div>
          );
        },
        renderEvent(event, defaultAttributes, styles) {
          return (
            <div className="table" {...defaultAttributes} title={event.name} key={event.id}>
              <span className="name">{event.name}</span>
              <span className="name">
                Taugh by:{event.taughBy}
              </span>
              <span className="name">
                "beb"
              </span>
            </div>
          );
        }
      }
    };
  }

  render() {
    return <Timetable {...this.state.timetableProps} />;
  }
}*/

import React from 'react';

//import "./Table.scss"

export default class DynamicTable extends React.Component {

  constructor(props) {

    super(props);


    this.state = {

      message: "",

      items: []

    }

  }
  updateMessage(event) {

    this.setState({
  
      message: event.target.value
  
    });
  
  }

  handleClick() {

    var items = this.state.items;
  
  
    items.push(this.state.message);
  
  
    this.setState({
  
      items: items
  
    });
  
  }
  handleItemChanged(i, event) {

    var items = this.state.items;
  
  
    items[i] = event.target.value;
  
  
    this.setState({
  
      items: items
  
    });
  
  }
  handleItemDelete(i) {

    var items = this.state.items;
  
  
    items.splice(i, 1);
  
  
    this.setState({
  
      items: items
  
    });
  
  }
  renderRows() {

    var context = this;
  
  
    return  this.state.items.map(function(o, i) {
  
              return (
  
                <tr key={"item-" + i}>
  
                  <td>
  
                    <input
  
                      type="text"
  
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
  
                  </td>
  
                  <td>
  
                  <button

onClick={context.handleItemDelete.bind(context, i)}

>  
                      Delete
  
                    </button>
  
                  </td>
  
                </tr>
  
              );
  
            });
  
  }
  render() {

    return (
  
      <div className="table">
  
        <table>
  
          <thead>
  
            <tr>
  
              <th>Period1</th>
              <th>Actions</th>
              <th>Period2</th>
              <th>Actions</th>
              <th>Period3</th>
              <th>Actions</th>
              <th>Period4</th>
              <th>Actions</th>
              <th>Period5</th>
              <th>Actions</th>
              <th>Period6</th>
              <th>Actions</th>
              <th>Period7</th>
              <th>Actions</th>
              <th>Period8</th>
              <th>Actions</th>
              <th>Period9</th>
              <th>Actions</th>
  
            </tr>
  
          </thead>
  
          <tbody>

{this.renderRows()}

</tbody>
  
        </table>
  
        <hr/>

        <input className="submit" type="text"  onChange={this.updateMessage.bind(this)} />
<button onClick={this.handleClick.bind(this)}>

  Add Item

</button>
  
      </div>
  
    );
  
  }
}