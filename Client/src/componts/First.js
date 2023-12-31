import './First.css';
import bt from "./photo/Screenshot_2023-12-15_165949-removebg-preview.png"
import btt from "./photo/61NoaSZARtL._AC_UL600_SR600_600_-removebg-preview.png"
import bts from "./photo/447974_C4_PreWorkout_WWE_Pomegranate_PileDriver_Front-removebg-preview.png"
import btx from "./photo/image-removebg-preview.png"
import bta from "./photo/inlife-whey-protein-powder-with-isolate-hydrolysate-and-digestive-enzymes-400-g-chocolate-product-images-orvpelkkgdy-p593539658-0-202208281943-removebg-preview.png"
import {Link} from 'react-router-dom'
function First() {
    return (

        <body className='bo' >
        <div>
    <nav className='main'>
<img src={bt} alt='#' className='imgaa'></img>
<ul className='main-menu'>
  <Link to="/Protien" className='ppo'><li className='kso'>protein</li></Link>
  <Link to="/Creatien" className='ppo'><li className='kso'>creatien</li></Link>
  <Link to="/Preworks" className='ppo'><li className='kso'>pre workout</li></Link>
  <Link to="/Fautemn" className='ppo'><li className='kso'>multivitamin </li></Link>
</ul>

<Link to='/login' className='Link'><button className='logout'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
  <span>Logout</span>
</button>
</Link>
<ul className='reight-menu'>
  <li>
    <i class="fas fa-search"></i>
  </li>
      <li>
    <i class="fas fa-shopping-cart"></i>
  </li>
</ul>
</nav>


<header className='showcase'>

<p className='we'>
the <span className='New'>NEW</span> Supplements
</p>
<div className='btn'>shop now 
<i className='fas fa-chevron-right'></i></div>
</header>



<section className='home-cards'>
<div>
  <img src={btt} alt='#'>
  </img>
  <div className='btn'>shop now 
<i className='fas fa-chevron-right'></i></div>
  <h3>KARBOLYN</h3>
  <h4 className='price'>$150</h4>
  <p>This supplement for peaple who have aproblem with eat</p>
</div>
<div>
  <img src={bts} alt='#'>
  </img>
  <div className='btn'>shop now 
<i className='fas fa-chevron-right'></i></div>
  <h3> C4 </h3>
  <h4 className='price'>$200</h4>
  <p>Pre-workout supplements. also called are meant to give you energy for when you exercise. </p>
</div>

<div>
  <img src={btx} alt='#'>
  </img>
  <div className='btn'>shop now 
<i className='fas fa-chevron-right'></i></div>
  <h3>NITROTECH</h3>
  <h4 className='price'>$120</h4>
  <p>This supplement for peaple who have aproblem with eat protien only</p>
</div>



<div>
  <img src={bta} alt='#'>
  </img>
  <div className='btn'>shop now 
   <i className='fas fa-chevron-right'></i></div>
  <h3>WHEY</h3>
  <h4 className='price'>$150</h4>
  <p>This supplement  give the user all thing (protein & carp)</p>
</div>
</section>

<section className="xbox">
<diV className="content"></diV> 
<h2 className='PP'> GYM FOR HEALTH</h2>
<p className='hary'>keep <span >Going</span></p>
 </section>




 <section className='links'>
  <div className='links-inner'>
    <ul>
      <li> <h3>
        what.s new
        </h3> 
        </li>
     <Link to="/SERVICES"> <li>service</li></Link>
      <li>service</li>
      <li>service</li>
    </ul>


    <ul>
      <li> <h3>
        what.s new
        </h3> 
        </li>
      <li>service</li>
      <li>service</li>
      <li>service</li>
    </ul>


    <ul>
      <li> <h3>
        what.s new
        </h3> 
        </li>
      <li>service</li>
      <li>service</li>
      <li>service</li>
    </ul>


    
    <ul>
      <li> <h3>
        what.s new
        </h3> 
        </li>
      <li>service</li>
      <li>service</li>
      <li>service</li>
    </ul> 
    
  </div>
   </section>
</div>
</body>
    );
}
export default First;
