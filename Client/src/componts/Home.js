import bt from "./photo/Screenshot_2023-12-15_165949-removebg-preview.png"
import btt from "./photo/61NoaSZARtL._AC_UL600_SR600_600_-removebg-preview.png"
import bts from "./photo/447974_C4_PreWorkout_WWE_Pomegranate_PileDriver_Front-removebg-preview.png"
import btx from "./photo/image-removebg-preview.png"
import bta from "./photo/inlife-whey-protein-powder-with-isolate-hydrolysate-and-digestive-enzymes-400-g-chocolate-product-images-orvpelkkgdy-p593539658-0-202208281943-removebg-preview.png"
import {Link } from "react-router-dom";
import"./Home.css"
function Home() {
    return (
        <body className='hi' >
        <div>
    <nav className='main'>
<img src={bt} alt='#' className='imgaa'></img>

<ul className='reight-menu'>
 
  <Link to="/login"><button className='btn' >sign in </button></Link>
  <Link to="/Restration"><button className='btn'>sign up </button></Link>

      
  
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
       <h3>
       
        </h3> 
        
    
    </ul>

  </div>
   </section>
</div>
</body>

)
  }
  
  export default Home;