import '/Users/koushikpillalamarri/Desktop/Blinkpad/my-react-app/src/Homeapp.css';
import Footer from './footer';
import Header from './header';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
    <>
      <div>
        <Header/>
        <div>
    <div className="firstsectionhome">
      <div className="firstsectioncontenthome">
    <h2 style={{fontSize:47,color:'white'}}> Blinkpad is a new kind of job matching platform </h2>
    <p className ="additional" style={{fontSize:24,color:'white'}}> Build your free multimedia profile, and find your next opportunity.<br/> All in the blink of an eye. 
    </p>
    <Link className="button" style ={{fontSize:24,color:'white'}} to="/signup">Sign Up</Link>
    </div>
    </div>
    </div>
    <div className="secondsectionhome">
      <div className="secondsectioncontenthome">
        <div className="insidesection">
         <img src ="data:image/jpeg;base64,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"/>

        </div>
        <div>
        <h1>Find work that fits you</h1>
    <p> Our unique AI instantly connects you with relevant opportunities that fit your interests, experience, and schedule. </p>
    <p>
      <b>No matter what keywords you use on your profile.</b>
      </p>
        </div>
      </div>
      </div>
      <div className ="secondsectionhomenew" >
        <div className = "thirdsectioncontenthome">
        <h1 className="header-subsectionnew">Healthcare and Hospitality</h1>
        <h1 style={{textAlign:'center'}}>Talent Marketplace</h1>
        <p style={{fontSize:18,width:1072,height:27,marginTop:18,marginBottom:18}}> Whether you're looking for full time, part time, gig, consulting, advising or product testing opportunities, there's work out there for you. </p>
       <p style={{fontSize:18,width:1072,height:27,marginTop:18,marginBottom:18,textAlign:'left'}}><b>And Blinkpad is here to help you find it.</b></p>
       <div className="sectionthirdnew">
       <div className="section-contentnew">
       <div className="home-employment-type">
        <div>
        <img src="https://blinkpad.com/static/employment-type/full-time.svg" style={{width:100,height:108}}/>
        <div className="home-grid-name">Full Time Jobs</div>
        </div>
        <div>
            <img src="https://blinkpad.com/static/employment-type/part-time.svg" style={{width:100,height:108}}/>
              <div className="home-grid-name">Part Time Jobs</div>
        </div>
        <div>
                <img src="https://blinkpad.com/static/employment-type/gig.svg" style={{width:100,height:108}}/>
                  <div className="home-grid-name">Gig Work</div>
        </div>
        <div>
                  <img src="https://blinkpad.com/static/employment-type/consulting.svg" style={{width:100,height:108}}/>
                    <div className="home-grid-name">Consulting</div>
          </div>
          <div>
                      <img src="https://blinkpad.com/static/employment-type/advising.svg" style={{width:100,height:108}}/>
                        <div className="home-grid-name">Advising</div>
          </div>
          <div>
                          <img src="https://blinkpad.com/static/employment-type/product-testing.svg" style={{width:100,height:108}}/>
                            <div className="home-grid-name">Product Testing</div>
            </div>
            </div>
            </div>
            </div>


          </div>
      </div>
      <div className="fourthsection">
        <div className="fourthsection-content">
        <iframe className="youtube-video" src="https://www.youtube.com/embed/0yAhPyO2yIg?rel=0">
        </iframe> 
        </div>
        </div>
        <div className="fifthsection">
          <div className="fifthsectioncontent">
            <h1 className="how">How it works</h1>
          </div>
        </div>
        <div className="onetothree">
          <div className="onetothreeinner">
           <div className="onetothreeinnerimg">
           <img src="https://blinkpad.com/static/how-it-works/profile-building.svg"/>
           </div>
           <div>
           <h1>Create Your Multimedia Profile</h1>
          <p> Create your free, multimedia profile to show off your skills, interests, and experiences. Go beyond the limitations of a traditional resume; add audio, video, and project cards to show employers who you are and what you can do. </p>
             </div>   
          </div>
        </div>


        <div className="onetothree">
          <div className="onetothreeinner">
          <div>
          <h1>Match with Paid Opportunities</h1><p> View opportunity matches that fit your schedule, experience, and job type preferences. You get a wider range of opportunity matches because we go far beyond scanning your profile for keywords; our unique AI reads and interprets user profiles to match you with the best opportunities, no matter what words you chose to describe your experience. </p>
           </div>
           <div className="onetothreeinnerimg">
           <img src="https://blinkpad.com/static/how-it-works/match.svg"/>
           </div>
  
          </div>
        </div>


        
        <div className="onetothree">
          <div className="onetothreeinner">
           <div className="onetothreeinnerimg">
           <img src="https://blinkpad.com/static/how-it-works/apply.svg"/>
           </div>
           <div>
           <h1>Apply &amp; Connect with Hiring Teams</h1>
           <p> Now that you’ve seen your opportunity matches, you choose which roles you want to apply to! It’s as simple as sharing your Blinkpad profile with the recruiter with one click. </p>
           </div>  
          </div>
        </div>

        <div className="secondsectionhome">
          <h1 style={{color:'gray',fontSize:45}}>AWARDS</h1>
          <div className="secondsectioncontenthome">
             <div>
                  
             </div>
             <div></div>
             <div></div>
            </div>

        </div>
         
         <div>

          </div>
         <Footer/>
      </div>
    </>
    );
  }
  
  export default Home;

