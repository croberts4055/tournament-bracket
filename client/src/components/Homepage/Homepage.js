import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Homepage.css';

class Homepage extends Component {
    render() {
      return (
        <div className="main-div">
            <MyNav/>
            <div className="article-container">
              <div className="big-article">Main Article</div>
              <div className="side-articles-container">
                  <div id="sideArticleOne">Article One</div>
                  <div id="sideArticleTwo">Article Two</div>
                </div>
            </div>
            <div className="ScheduleBar">
                <div id="scheduleDiv">SCHEDULE</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div id="viewScheduleDiv"><a href="#">VIEW SCHEDULE</a></div>
            </div>
            <div className="brand-info">
                <div className="brand-info-container">
                    <div className="egf-college">
                        <div className="egf-logo-college pull-left">
                            <img src="/images/egfc_badge.png" />
                        </div>
                    </div>
                    <div className="egf-highschool">
                        <div className="egf-logo-highschool pull-left">
                            <img src="/images/egfh_badge.png" />
                        </div>
                    </div>
                    <div className="egf-media">
                        <div className="egf-logo-media pull-left">
                            <img src="/images/egfm_badge.png" /> 
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div> //main div end!
      );
    }
  }

  export default Homepage;