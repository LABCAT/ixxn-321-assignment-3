import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";

export default function Footer() {
    return (
        
<footer className='site-footer'>

      
<div class="footer-container">

    <div className="footer-col"> 
   
        <h4>Learn About</h4>


        <div className="footer-content"><Link to="/search/category=Health"><li>Health</li></Link></div> 

        <div className="footer-content"><Link to="/search/category=Business"><li>Business</li></Link></div>

        <div className="footer-content"><Link to="/search/category=PPE"><li>PPE</li></Link></div>
    
        <div className="footer-content"><Link to="/search/category=Levels"><li>Levels</li></Link></div>

        <div className="footer-content"><Link to="/search/category=Finances"><li>Finances</li></Link></div>

	    <div className="footer-content"><Link to="/search/category=Childcare"><li>Childcare</li></Link></div>

	    <div className="footer-content"><Link to="/search/category=Travel"><li>Travel</li></Link></div>

   
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


</div>





<div className="footer-nav">
    <hr/>
        <a href="/info#about-us"><li>About us</li></a>
        <a href="/info#privacy"><li>Privacy</li></a>
        <a href="/info#terms-of-use"><li>Terms of use</li></a>
        <a href="/info#contact"><li>Contact</li></a>
  
</div>


</footer>
    );
}





