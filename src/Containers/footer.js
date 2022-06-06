import React from "react";
import '/Users/koushikpillalamarri/Desktop/Blinkpad/my-react-app/src/App.css';
import { IoLocationOutline } from 'react-icons/io5';
import {HiOutlineMail} from 'react-icons/hi';
import {MdSecurity} from 'react-icons/md';
import {FaRegHandshake,FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa';
function Footer() {
  return (
    <div className = "sectionfooter">
      <div className ="sectioncontent">
        <div className="footerlogo"> 
            <div className="footerlogonew">

            </div>
        </div>
          <div className="footercolumns">
            <div>
            <p style={{color: 'white'}}> The Blinkpad name and logo are trademarks of Blinkpad Inc. All other trademarks are the property of their respective owners. </p>
            <p style={{color: 'white'}}> 
            © 2018 – 2022 Blinkpad Inc.
            <br/>
            Made with <span style={{color: 'red'}}>❤</span> in California, USA
            <br/> 
            All rights reserved. 
            </p>
            </div>
            
            
            <div >
            <h3 style={{color: 'white'}}>Contact</h3>
            <div className="footerlink">
             <i className="materialicons"><IoLocationOutline/></i>
             <div>440&nbsp;N&nbsp;Wolfe&nbsp;Rd, Sunnyvale,&nbsp;CA&nbsp;94085 </div>
             </div>
            <div className="footerlink">
              <i className="materialicons"><HiOutlineMail/></i>
              <a href="mailto:test@blinkpad.com" style={{color: 'white'}} >test@blinkpad.com</a>
            </div>
            </div>
            
            
            
            <div>
            <h3 style={{color: 'white'}}>Legal</h3>            
            <div className="footerlink"><i className="materialicons"><MdSecurity/></i><a href="/privacy" style={{color: 'white'}}>Privacy Policy</a></div>
            <div className="footerlink"><i className="materialicons"><FaRegHandshake/></i><a href="/useragreement" style={{color: 'white'}}>User Agreement</a></div>
            </div>
             </div>
            <div className="socialmedia">
            <a className="socialmediabutton" href="https://twitter.com/BlinkpadInc" target="blank"><FaTwitter/></a>
            <a className="socialmediabutton" href="https://www.facebook.com/blinkpadInc" target="blank"><FaFacebookF/></a>
            <a className="socialmediabutton" href="https://www.instagram.com/blinkpad/" target="blank"><FaInstagram/></a>
            </div>
            
      </div>
    </div>
  );
}

export default Footer;


