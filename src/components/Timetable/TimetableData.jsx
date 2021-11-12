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
            Monday: [{
              Period1: "WPL",
              Period2: "WPL",
              Period3: "WPL",
              Period4: "EL-5",
              Period5: "ML",
              Period6: "ES",
              Period7: "-"
            }],
            Tuesday: [{
              Period1: "ES",
              Period2: "ML",
              Period3: "-",
              Period4: "EL-6",
              Period5: "-",
              Period6: "-",
              Period7: "LE"
            }],
              Wednesday: [{
                  Period1: "-",
                   Period2: "-",
                   Period3: "-",
                   Period4: "EL-6",
                   Period5: "LE",
                   Period6: "-",
                   Period7: "-"
            }],
                Thursday: [{
                  Period1: "-",
                  Period2: "-",
                  Period3: "WEB(T)",
                  Period4: "EL-5",
                  Period5: "-",
                  Period6: "OT",
                  Period7: "OT"
                  
            }],
            Friday: [{
              Period1: "IE",
              Period2: "IE",
              Period3: "-",
              Period4: "EL-5",
              Period5: "ML",
              Period6: "ES",
              Period7: "OT"
              
            }],
            Saturday: [{
              Period1: "-",
              Period2: "-",
              Period3: "EL-6",
              Period4: "LE",
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
                    Period1: response.data.classes.Monday.Period1,
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
        console.log(response.data)
        console.log("response.data")
      
    })
    .catch(error => {
      console.log(error.response.status(400).json('Error:'+error))
    }) 
}
/*
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
*/
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
var link = "https://meet.google.com/poa-xpoz-kuo"

return this.number.map((number)=>{
  if(number === 1)
  return (
    <tr>
      <td>Monday</td>
      <td><a href={link}>{cl.Monday[0].Period1}</a>  </td>
      <td><a href={link}>{cl.Monday[0].Period2}</a></td>
      <td><a href={link}>{cl.Monday[0].Period3}</a></td>
      <td><a href={link}>{cl.Monday[0].Period4}</a></td>
      <td><a href={link}>{cl.Monday[0].Period5}</a></td>
      <td><a href={link}>{cl.Monday[0].Period6}</a></td>
      <td>{cl.Monday[0].Period7}</td>
    </tr>
  )



else if(number === 2)
return (
  <tr>
    <td>Tuesday</td>
    <td><a href={link}>{cl.Tuesday[0].Period1}</a></td>
    <td><a href={link}>{cl.Tuesday[0].Period2}</a></td>
    <td>{cl.Tuesday[0].Period3}</td>
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
    <td>{cl.Wednesday[0].Period1}</td>
    <td>{cl.Wednesday[0].Period2}</td>
    <td>{cl.Wednesday[0].Period3}</td>
    <td><a href={link}>{cl.Wednesday[0].Period4}</a></td>
    <td><a href={link}>{cl.Wednesday[0].Period5}</a></td>
    <td>{cl.Wednesday[0].Period6}</td>
    <td>{cl.Wednesday[0].Period7}</td>
  </tr>
  
  
)

else if(number === 4)
return (
  <tr>
    <td>Thursday</td>
    <td>{cl.Thursday[0].Period1}</td>
    <td>{cl.Thursday[0].Period2}</td>
    <td><a href={link}>{cl.Thursday[0].Period3}</a></td>
    <td><a href={link}>{cl.Thursday[0].Period4}</a></td>
    <td>{cl.Thursday[0].Period5}</td>
    <td><a href={link}>{cl.Thursday[0].Period6}</a></td>
    <td><a href={link}>{cl.Thursday[0].Period7}</a></td>
  </tr>
  
  
)

else if(number === 5)
return (
  <tr>
    <td>Friday</td>
    <td><a href={link}>{cl.Friday[0].Period1}</a></td>
    <td><a href={link}>{cl.Friday[0].Period2}</a></td>
    <td>{cl.Friday[0].Period3}</td>
    <td><a href={link}>{cl.Friday[0].Period4}</a></td>
    <td><a href={link}>{cl.Friday[0].Period5}</a></td>
    <td><a href={link}>{cl.Friday[0].Period6}</a></td>
    <td><a href={link}>{cl.Friday[0].Period7}</a></td>
  </tr>
  
  
)

else if(number === 6)
return (
  <tr>
    <td>Saturday</td>
    <td>{cl.Saturday[0].Period1}</td>
    <td>{cl.Saturday[0].Period2}</td>
    <td><a href={link}>{cl.Saturday[0].Period3}</a></td>
    <td><a href={link}>{cl.Saturday[0].Period4}</a></td>
    <td>{cl.Saturday[0].Period5}</td>
    <td>{cl.Saturday[0].Period6}</td>
    <td>{cl.Saturday[0].Period7}</td>
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

  <input type="submit"  value="Create User" className="btn btn-primary"/>

</form >

</div>

);

}
}
