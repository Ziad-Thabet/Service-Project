import {Link } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { FaLock } from "react-icons/fa";
import"./login.css"
function login() {
    return (
      <body className="kl">
      
      <div className="wrapper"> 
      <form action="">
        <h1>
          Login
        </h1>
        <div className="input-box">
        <input type="text" placeholder="username" required/>
        <FaUser className="icon"/>
        </div>

        <div className="input-box">
        <input type="password" placeholder="password" required/>
        <FaLock className="icon"/>
        </div>

        <div className="forget">
        <label><input type="checkbox"/>Rememder me</label>
        <span>Forget password</span>
        </div>

       <Link to='/First'> <button type="submit"> Login </button> </Link>
        <div className="register">
        <Link to='/Restration'><span>Don't have an account?</span> </Link>
        </div>
      </form>
      </div>
      </body>
      );
  }
  
  export default login;