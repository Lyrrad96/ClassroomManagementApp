import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-react-schedule';
/*<ScheduleComponent>
<Inject services={[Day, Week, WorkWeek, Month]}></Inject>
</ScheduleComponent>)*/
export default class Timetable extends React.Component {
  render() {
    return (

      <div className="container">

          <h1>Simple Inventory Table</h1>

          <table>

              <thead>

              <tr>

                  <th>Product Name</th>

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
}