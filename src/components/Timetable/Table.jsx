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
/*
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
{this.renderRows()}
{this.renderRows()}
{this.renderRows()}
{this.renderRows()}
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
}*/


import React, { Component, useState } from "react";
import axios from 'axios'

import "./Table.scss";
//import { Link } from 'react-router-dom';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.renderRows = this.renderRows.bind(this);

    this.number = [1, 2, 3, 4, 5, 6]
    this.state = {
      count: 0,
        userid: "7B",
        classes: [{
            Wednesday: [{
              Period1: "WPL 7A",
              Period2: "WPL 7A",
              Period3: "WPL 7A",
              Period4: "EL-5  7A+7B+7C",
              Period5: "WPL 7B",
              Period6: "WPL 7B",
              Period7: "WPL 7B"
            }],
            Saturday: [{
              Period1: "EL-5 7A+7B+7C",
              Period2: "-",
              Period3: "-",
              Period4: "WEB(T) 7B",
              Period5: "-",
              Period6: "-",
              Period7: "WEB(T) 7C"
            }],
              Thursday: [{
                Period1: "WPL 7C",
                Period2: "WPL 7C",
                Period3: "WPL 7C",
                Period4: "EL-5 7A+7B+7C",
                   Period5: "-",
                   Period6: "-",
                   Period7: "-"
            }],
                Tuesday: [{
                  Period1: "-",
                  Period2: "-",
                  Period3: "WEB(T) 7C",
                  Period4: "EL-5 7A+7B+7C",
                  Period5: "-",
                  Period6: "",
                  Period7: "WEB(T) 7A"
                  
            }],
            Monday: [{
              Period1: "Web(T) 7C",
              Period2: "Web(T) 7C",
              Period3: "-",
              Period4: "Web(T) 7B",
              Period5: "Web(T) 7C",
              Period6: "-",
              Period7: "-"
              
            }],
            Friday: [{
              Period1: "-",
              Period2: "-",
              Period3: "EL-5 7A+7B+7C",
              Period4: "Web(T) 7C",
              Period5: "-",
              Period6: "-",
              Period7: "-"
                
            }],
        }],
        section: "",
        }
    } 
  
  onChangePassword(e) {
    this.setState({
      password:e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

  
    axios.get('http://localhost:5000/timetables/tt/'+this.state.userid)
    .then(response => {
        this.setState({
            userid: response.data.userid,
            classes: [{
                Monday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,

                }],
                Tuesday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,

                }],
                    Wednesday: [{
                        Period1: response.data.Period1,
                        Period2: response.data.Period2,
                        Period3: response.data.Period3,
                        Period4: response.data.Period4,
                        Period5: response.data.Period5,
                        Period6: response.data.Period6,
                        Period7: response.data.Period7,
    
                }],
                    Thursday: [{
                        Period1: response.data.Period1,
                        Period2: response.data.Period2,
                        Period3: response.data.Period3,
                        Period4: response.data.Period4,
                        Period5: response.data.Period5,
                        Period6: response.data.Period6,
                        Period7: response.data.Period7,
    
                }],
                Friday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,

                }],
                Saturday: [{
                    Period1: response.data.Period1,
                    Period2: response.data.Period2,
                    Period3: response.data.Period3,
                    Period4: response.data.Period4,
                    Period5: response.data.Period5,
                    Period6: response.data.Period6,
                    Period7: response.data.Period7,
                    
                }],
            }],
            section: response.data.section,
        } 
        )
        console.log(response.data.classes[0])
        console.log("response.data")
      
    })
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
    }) 
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

renderRows(number) {


  var cl = this.state.classes[0]
  console.log("day")
  console.log(this.state.classes[0].Monday)



if(number === 0)
return(
  <tr>
<th>7C</th>
        <th>Period1</th>
        <th>Period2</th>
        <th>Period3</th>
        <th>Period4</th>
        <th>Period5</th>
        <th>Period6</th>
        <th>Period7</th>

        </tr>
)
var link = "https://meet.google.com/?pli=1"

return this.number.map((number)=>{
  if(number === 1)
  return (
    <tr>
      <td>Monday</td>
      <td><a href={link}>{cl.Monday[0].Period1}</a>  </td>
      <td><a href={link}>{cl.Monday[0].Period2}</a></td>
      <td>{cl.Monday[0].Period3}</td>
      <td><a href={link}>{cl.Monday[0].Period4}</a></td>
      <td><a href={link}>{cl.Monday[0].Period5}</a></td>
      <td>{cl.Monday[0].Period6}</td>
      <td>{cl.Monday[0].Period7}</td>
    </tr>
  )



else if(number === 2)
return (
  <tr>
    <td>Tuesday</td>
    <td>{cl.Tuesday[0].Period1}</td>
    <td>{cl.Tuesday[0].Period2}</td>
    <td><a href={link}>{cl.Tuesday[0].Period3}</a></td>
    <td><a href={link}>{cl.Tuesday[0].Period4}</a></td>
    <td>{cl.Tuesday[0].Period5}</td>
    <td>{cl.Tuesday[0].Period6}</td>
    <td><a href={link}>{cl.Tuesday[0].Period7}</a></td>
  </tr>

)

else if(number === 3)
return (
  <tr>
    <td>Wednesday</td>
    <td><a href={link}>{cl.Wednesday[0].Period1}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period2}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period3}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period4}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period5}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period6}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period7}</a></td>
  </tr>
  
  
)

else if(number === 4)
return (
  <tr>
    <td>Thursday</td>
    <td><a href={link}>{cl.Thursday[0].Period1}</a></td>
    <td><a href={link}>{cl.Thursday[0].Period2}</a></td>
    <td><a href={link}>{cl.Thursday[0].Period3}</a></td>
    <td><a href={link}>{cl.Thursday[0].Period4}</a></td>
    <td>{cl.Thursday[0].Period5}</td>
    <td>{cl.Thursday[0].Period6}</td>
    <td>{cl.Thursday[0].Period7}</td>
  </tr>
  
  
)

else if(number === 5)
return (
  <tr>
    <td>Friday</td>
    <td>{cl.Friday[0].Period1}</td>
    <td>{cl.Friday[0].Period2}</td>
    <td><a href={link}>{cl.Friday[0].Period3}</a></td>
    <td><a href={link}>{cl.Friday[0].Period4}</a></td>
    <td>{cl.Friday[0].Period5}</td>
    <td>{cl.Friday[0].Period6}</td>
    <td>{cl.Friday[0].Period7}</td>
  </tr>
  
  
)

else if(number === 6)
return (
  <tr>
    <td>Saturday</td>
    <td><a href={link}>{cl.Saturday[0].Period1}</a></td>
    <td>{cl.Saturday[0].Period2}</td>
    <td>{cl.Saturday[0].Period3}</td>
    <td><a href={link}>{cl.Saturday[0].Period4}</a></td>
    <td>{cl.Saturday[0].Period5}</td>
    <td>{cl.Saturday[0].Period6}</td>
    <td><a href={link}>{cl.Saturday[0].Period7}</a></td>
  </tr>
  
)}
)
}


/*

renderTuesday(number) {


  var no = number;
  var cl = this.state.classes[0]
  var day = '.'+number
  console.log(day)


return(
 
 <tr>
    <td>Saturday</td>
    <td>{cl.Saturday[0].Period1}</td>
    <td>{cl.Saturday[0].Period2}</td>
    <td>{cl.Saturday[0].Period3}</td>
    <td>{cl.Saturday[0].Period4}</td>
    <td>{cl.Saturday[0].Period5}</td>
    <td>{cl.Saturday[0].Period6}</td>
    <td>{cl.Saturday[0].Period7}</td>
  </tr>
)
}
*/



/*this.state.classes.Monday.map(function(o, i) {

            return (

              <tr key={"item-" + i}>

                <td>

                  <input

                    type="text"

                    value={o}
                    onChange={context.handleItemChanged.bind(context, i)}
                  />

                </td>
                <td>ok</td>
                <td>ok</td>
                <td>ok</td>

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
/* <div className="Signin ">
      <h3>Create User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form group">
          <label>Username: </label>
          <input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.onChangeMon1}/>
          <label>Password: </label>
          <input type="password"  className="form-control" defaultValue={this.state.password} onChange={this.onChangePassword}/>
          <h3>{this.state.password}</h3><input type="text"  className="form-control" defaultValue={this.state.username} onChange={this.toHome}/>
        </div>
       
        <div className="form submit">
          <input type="submit"  value="Create User" className="btn btn-primary"/>
        </div>
        
      </form>*/
render(){
  return(
   
      <div className="table">
        <form onSubmit={this.onSubmit}>

  <table>

    <thead>

      <tr>
      
      <th >{this.renderRows(0)}</th>

      </tr>

    </thead>

    <tbody>
<td>{this.renderRows(1)}</td>
</tbody>

  </table>

  <hr/>

  <input className="submit" type="text"  onChange={this.onSubmit} />
        
</form >

</div>

);

}
}
