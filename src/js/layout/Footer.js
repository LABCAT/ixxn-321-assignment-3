import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";

export default function Footer() {
    return (
        
<footer className='site-footer'>

      
<div class="footer-container">

<div className="footer-col"> 
   
<h4>Learn About</h4>


    <div className="footer-content"><a href="/search/category=Health"><li>Health</li></a></div> 

    <div className="footer-content"><a href="/search/category=Business"><li>Business</li></a></div>

    <div className="footer-content"><a href="/search/category=PPE"><li>PPE</li></a></div>
    
    <div className="footer-content"><a href="/search/category=Levels"><li>Levels</li></a></div>

    <div className="footer-content"><a href="/search/category=Finances"><li>Finances</li></a></div>

	<div className="footer-content"><a href="/search/category=Childcare"><li>Childcare</li></a></div>

	<div className="footer-content"><a href="/search/category=Travel"><li>Travel</li></a></div>

   
</div>

<div className="footer-col"> 
   
<h4>Learn About</h4>


    <div className="footer-content"><a href="/search/category=Health"><li>Health</li></a></div> 

    <div className="footer-content"><a href="/search/category=Business"><li>Business</li></a></div>

    <div className="footer-content"><a href="/search/category=PPE"><li>PPE</li></a></div>
    
    <div className="footer-content"><a href="/search/category=Levels"><li>Levels</li></a></div>

    <div className="footer-content"><a href="/search/category=Finances"><li>Finances</li></a></div>

	<div className="footer-content"><a href="/search/category=Childcare"><li>Childcare</li></a></div>

	<div className="footer-content"><a href="/search/category=Travel"><li>Travel</li></a></div>

   
</div>  
 
 <div class="footer-col">

    <Link to="/" className='site-header-logo'>
             <img
                src={mainLogo}
                className="logo-image"
                alt="covid19 logo"
             />
    </Link>
  </div> 


            
<hr/>



</div>





<div className="footer-nav">

    <a href="#"><li>About us</li></a>
    <a href="#"><li>Privacy</li></a>
    <a href="#"><li>Term of use</li></a>
    <a href="#"><li>Contact</li></a>
  
</div>


</footer>
    );
}