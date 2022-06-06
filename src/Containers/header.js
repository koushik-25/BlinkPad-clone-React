import '/Users/koushikpillalamarri/Desktop/Blinkpad/my-react-app/src/App.css';
import { Outlet, Link } from "react-router-dom";
import Footer from './footer';
function Header() {
    return (
      <>
      <div>
      <div className="sectionheader">
    <div className="sectioncontenthome">
      <div className="headerleft">
        <label className="materialicons" ></label>
        <div className="logohome"></div>
      </div>
      <div className="navigation" role="navigation">

          {/*<a href="/" className="navigationinside" aria-current="page">Home</a>
          <a href="/about" className="navigationinside">About</a>
          <a href="/faq" className="navigationinside">FAQ</a>
          <a href="/business" className="navigationinside">Business</a>
          <a href="/login" className="navigationinside">Login</a>
          < a href="/signup" className="navigationinside">Sign Up</a>*/}

        <Link className="navigationinside" to="/">Home</Link>
        <Link className="navigationinside"  to="/about">About</Link>
        <Link  className="navigationinside" to="/faq">FAQ</Link>
        <Link className="navigationinside" to="/business">Business</Link>
        <Link className="navigationinside" to="/login">Login</Link>
        <Link  className="navigationinside" to="/signup">Sign Up</Link>

      </div>
      </div>
  
    </div>
      </div>
    </>
    );
  }
  
  export default Header;
