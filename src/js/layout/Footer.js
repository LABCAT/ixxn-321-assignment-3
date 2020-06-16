import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import mainLogo from "../../images/mainDashboardLogo.png";

export default function Footer() {
    return (
        


<footer className='site-footer'>
       
<div class="column3">
    
    <ul>
    <li>
<h4>Contact Us</h4>
<div className="p1">

    <p> Address: 1A Vivian Street, Te Aro, Wellington, NZ.  </p> 
    <p>Postal code: 6011.</p>

  
    <p>Phone number: (+64) 774140931.</p>
    <p>Email address: Checkincovid19@gmail.com</p>
    <p>Working hour: 9am – 9pm, Monday to Sunday.</p>
    <p>Social media: Checkincovid19</p>
</div>
    </li> 
    <Link to="/" className='site-header-logo'>
             <img
                src={mainLogo}
                className="logo-image"
                alt="covid19 logo"
             />
            </Link>
  <li>
  </li>   

 </ul> 

</div>

<hr/>



<div className="footer-nav">

  <ul>
    <a href="index.js"><li>About us</li></a>
    <a href="#"><li>Privacy</li></a>
    <a href="#"><li>Term of use</li></a>
    <a href="#"><li>Contact</li></a>
  
  </ul>
</div>


</footer>
    );
}