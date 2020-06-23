import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Transition } from 'react-spring/renderprops';



import * as Constants from '../context/Constants.js';

export default function info() {


    return (


<div className="info-page">

<div className="info-nav">
<Link to="/">Home</Link>
</div>

        <div className="info-container" id="about-us">
   <h3>About Us</h3>     
   <p> If you’re dealing with the fallout from COVID-19 and need some help, check out the content on this site. </p>

<p>This website is a central place for information about a range of government 
services designed to support New Zealand to recover from the impacts of COVID-19. 
It also has information about the measures required to combat the COVID-19 virus 
including an outline of New Zealand's Alert Level system.</p>

<p> We will continue to update the site with programmes and information about support being provided by a 
range of central and local government agencies. </p>

<p>This site has been developed by the Group 3 Web Design - Victoria University of Wellington 2020 </p>

<hr/>
</div>

        <div className="info-container" id="privacy">

   <h3>Privacy</h3>        
   <p> The purpose of this privacy policy is to let users of covid.mysite.net.nz (the ‘site’) 
   	know when we collect personal information and what we do with it.</p>
	<p>We do not use, share or transfer personal information in connection with the site except as set out in this policy, 
	or as otherwise set out somewhere on the site including in terms linking to the site.</p>

	<p>There's no need to disclose personal information.</p>

	<p>You can use the site — including completing user research tasks — without disclosing any personal information.</p>

	<h4>Statistical information collected</h4>

	<p>We may collect statistical information about your visit to our website to help us improve it. This information does not identify individuals, and makes use of cookies. 
	A cookie is a piece of code that creates a file on your computer to track the pages that you view on our website. </p>

	<h4>Google Analytics</h4>

	<p>We use Google Universal Analytics to collect and analyse details about the use of our website. 
	You may turn off cookies at any time. Most browsers have a feature that allows the user to refuse cookies, 
	or issues a warning when cookies are being sent. Turning off cookies will not affect your ability to use this site.</p>

	<h4>Cookies</h4>
	<p>This site generates persistent session cookies for the purpose of monitoring site usage. 
	These have an expiry date and are removed on that date. The cookies do not collect personal information. 
	You can disable them or clear them out of your web browser without affecting your ability to use the site.</p>
<hr/>
</div>


 <div className="info-container" id="terms-of-use">

 <h3>Terms Of Use</h3>   
    <p> Welcome to ucovid.mysite.net.nz (the ‘site’), a website hosted and operated by the Group 3 Web Design - Victoria University of Wellington 2020.</p>

	<p>These terms apply to the entire contents of the site, to any web feeds produced by the site, 
	and to any feedback or submissions provided through the site. 
	By viewing and using the site, you will be deemed to have agreed to these Terms of use.</p>

	<h4>Disclaimer</h4>

	<p> Group 3 Web Design - Victoria University of Wellington 2020 disclaims and excludes all liability for any claim, loss, 
	demand or damages of any kind whatsoever (including for negligence) arising out of 
	or in connection with the use of either this website or the information, 
	content or materials included on this site or on any website we link to.</p>

	<p>If you need professional advice, including advice about your legal obligations, 
	you should see a professional adviser and not rely on the information, 
	content or materials included on this site or on any website we link to.</p>

	<h4>Continuity of service</h4>

	<p>The NZ Government makes no warranty or representation, express or implied, as to continuity of service. 
	It reserves the right to suspend, terminate or otherwise alter access to some or 
	all of the site’s services at any time and without notice. </p>

<hr/>
</div>

 <div className="info-container" id="contact">

 <h3>Contact</h3>  
 <h4>Who to contact if you have questions or want to give us feedback on the website.</h4> 
   	<p> Email: checkin@covid19.nz </p>

	<p>Fax: +64 123 456 78910</p>

	<p> Phone number: +64 123 456 78910 </p>

	<h4>Postal address </h4>
	<p>139 Vivian Street</p> 
	<p>Te Aro</p> 
	<p>Wellington 6011</p>


</div>
<br/>
<br/>
<div className="info-nav-bottom">
<a href="#top">Back to top</a>
</div>
</div>



    );
}