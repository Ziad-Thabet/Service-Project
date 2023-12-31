import {Link } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import './Restration.css'

function Restration() {
    return (
        <body className="kp">
        <div className="wrapper"> 
        <form action="">
          <h1 className="ll">
            Restration
          </h1>
          <div className="input-box">
          <input type="text" placeholder="username" required/>
          <FaUser className="icon"/>
          </div>

          <div className="input-box">
          <input type="text" placeholder=" First name" required/>
          <FaUser className="icon"/>
          </div>

          <div className="input-box">
          <input type="text" placeholder="Last name" required/>
          <FaUser className="icon"/>
          </div>
  
          <div className="input-box">
          <input type="password" placeholder="password" required/>
          <FaLock className="icon"/>
          </div>


          <div className="input-box">
          <input type="password" placeholder="confirem password" required/>
          <FaLock className="icon"/>
          </div>

          <div className="input-box">
          <input type="email" placeholder="email" required/>
          <AiTwotoneMail className="icon"/>
          </div>

          <div className="input-box">
          <input type="number" placeholder="age" required/>
          <RiPagesLine className="icon"/>
          </div>    


  
         <Link to='/login'> <button className="ft" type="submit"> <span className="get">Get start</span> </button> </Link>
          <div className="register">
          </div>
        </form>
        </div>
        </body>
    );
  }
  
  export default Restration;