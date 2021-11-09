import React, { useState } from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-react-schedule';
/*<ScheduleComponent>
<Inject services={[Day, Week, WorkWeek, Month]}></Inject>
</ScheduleComponent>)*/
/*
const API_HOST = "http://localhost:5000";
const INVENTORY_API_URL = `${API_HOST}/timetable`;


export default class Timetable extends React.Component {
  
  render() {
    return (

      <div className="table">

          <h1>Simple Inventory Table</h1>

          <table>

              <thead>

              <tr>

                  <th></th>

                  <th>Product Category</th>

                  <th>Unit Price</th>

                  <th>Action</th>

              </tr>

              </thead>

              <tbody>

                  <tr>

                      <td/>

                      <td/>

                      <td/>

                      <td/>

                  </tr>

              </tbody>

          </table>

      </div>

  );

}
}*/

import Editable from "./Editable";

function App() {
  // State for the input
  const [task, setTask] = useState("");

  /*
    Enclose the input element as the children to the Editable component to make it as inline editable.
  */
  return (
    <Editable
      text={task}
      placeholder="Write a task name"
      type="input"
    >
      <input
        type="text"
        name="task"
        placeholder="Write a task name"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </Editable>
  );
}

export default App;