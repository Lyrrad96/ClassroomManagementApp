import './Home.scss'
import { Link } from 'react-router-dom'
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="home2" id="home2">
      <div className="features-container">
        <div className="item">
          <h3>Sign up</h3>
        </div>
        <div className="item">
          <h3>Create your own Timetable</h3>
        </div>
        <div className="item">
          <h3>Click on your desired class/session</h3>
        </div>
        <div className="item">
          <h3>Teach/Learn and Repeat!</h3>
        </div>
      </div>
      <h2>We work for all apps!</h2>
      <div className="apps-container">
        <div className="item">
          <img src="../../images/google\ meet.svg" alt="" />
        </div>
        <div className="item">
          <img src="../../images/skype\ meet.png" alt="" />
        </div>
        <div className="item">
          <img src="../../images/cisco.png" alt="" />
        </div>
        <div className="item">
          <img src="../../images/cisco.png" alt="cisco" />
        </div>
        <div className="item">
          <h4>And more...</h4>
        </div>
      </div>
      <h4>Sign up as</h4>
      <div className="sign">
        <div className="signupopts">
          <div className="item">
            <img src="../../images/student.png" alt="student" />
            <Link to="/SignUp">Student</Link>
          </div>
          <div className="item">
            <img src="../../images/teacher.png" alt="teacher" />
            <Link to="/TsignUp">Teacher</Link>
                      </div>
        </div>
      
      <p className="signn">Already have an account?<a href="/Signin">Sign In</a></p>
    </div>
    </div>
      <div className="left">
        <div className="imgContainer">
          
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <h2>Make sure</h2>
          <h2>you’re never</h2>
          <h2>late for a</h2>
          <h2>class again!</h2> */}
          <h2>Make sure you're never late for a class again!</h2>
        </div>
      </div>
      </div>
      
    
  )
}

/*import googlemeet from './googlemeet.svg'
import skypemeet from './skypemeet.png'
import zoom from './zoom.png'
import cisco from './cisco.png'
import student from './student.png'
import teacher from './teacher.png'*/
/*
function Home2() {
  return (
    
  )
}*/