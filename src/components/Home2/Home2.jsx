import './home2.scss'
import googlemeet from './googlemeet.svg'
import skypemeet from './skypemeet.png'
import zoom from './zoom.png'
import cisco from './cisco.png'
import student from './student.png'
import teacher from './teacher.png'
import { Link } from 'react-router-dom'

function Home2() {
  return (
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
          <img src={googlemeet} alt="" />
        </div>
        <div className="item">
          <img src={skypemeet} alt="" />
        </div>
        <div className="item">
          <img src={zoom} alt="" />
        </div>
        <div className="item">
          <img src={cisco} alt="" />
        </div>
        <div className="item">
          <h4>And more...</h4>
        </div>
      </div>
      <h4>Sign up as</h4>
      <div className="sign">
        <div className="signupopts">
          <div className="item">
            <img src={student} alt="student" />
            <Link to="Signup">Student</Link></div>
          <div className="item">
            <img src={teacher} alt="teacher" />
            <Link to="Tsignup">Teacher</Link>
          </div>
        </div>
      </div>
      <p className="signin">Already have an account?<a href="/Signin">Sign In</a></p>
    </div>
  )
}

export default Home2
