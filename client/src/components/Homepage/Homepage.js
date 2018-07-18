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
                <div id="viewScheduleDiv"><a href="/">VIEW SCHEDULE</a></div>
            </div>
            {/* <div className="brand-info"> */}

                <div className="brand-info-container">
                    <div className="egf-college">
                        <div className="egf-logo-college">
                            <img src="/images/egfc_badge.png" />
                            <div className="egf-info-college">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet turpis eu sem pharetra porta. Morbi eget commodo dolor. Mauris ullamcorper, urna eget tristique pellentesque, nisl augue sodales lorem, et ultrices enim nibh vel ex. Etiam iaculis dolor vel neque elementum vehicula. Donec finibus dui ac nibh dignissim posuere. Ut rutrum quis augue ac congue. Phasellus vitae lobortis dui. Vestibulum ullamcorper posuere enim eget mollis. Aliquam rhoncus rutrum risus, auctor molestie risus vestibulum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit tempor molestie. Nunc venenatis vestibulum sem ut sodales. Curabitur eget urna sed ante pharetra aliquam id nec ligula.
                            </div>
                        </div>
                    </div>
                    <div className="egf-highschool">
                        <div className="egf-logo-highschool">
                            <img src="/images/egfh_badge.png" />
                            <div className="egf-info-highschool">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet turpis eu sem pharetra porta. Morbi eget commodo dolor. Mauris ullamcorper, urna eget tristique pellentesque, nisl augue sodales lorem, et ultrices enim nibh vel ex. Etiam iaculis dolor vel neque elementum vehicula. Donec finibus dui ac nibh dignissim posuere. Ut rutrum quis augue ac congue. Phasellus vitae lobortis dui. Vestibulum ullamcorper posuere enim eget mollis. Aliquam rhoncus rutrum risus, auctor molestie risus vestibulum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit tempor molestie. Nunc venenatis vestibulum sem ut sodales. Curabitur eget urna sed ante pharetra aliquam id nec ligula.
                            </div>
                        </div>
                    </div>
                    <div className="egf-media">
                        <div className="egf-logo-media">
                            <img src="/images/egfm_badge.png" /> 
                            <div className="egf-info-media">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet turpis eu sem pharetra porta. Morbi eget commodo dolor. Mauris ullamcorper, urna eget tristique pellentesque, nisl augue sodales lorem, et ultrices enim nibh vel ex. Etiam iaculis dolor vel neque elementum vehicula. Donec finibus dui ac nibh dignissim posuere. Ut rutrum quis augue ac congue. Phasellus vitae lobortis dui. Vestibulum ullamcorper posuere enim eget mollis. Aliquam rhoncus rutrum risus, auctor molestie risus vestibulum sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit tempor molestie. Nunc venenatis vestibulum sem ut sodales. Curabitur eget urna sed ante pharetra aliquam id nec ligula.
                            </div>
                        </div>
                    </div>
                </div>

            {/* </div> */}
            
            <Footer/>
        </div> //main div end!
      );
    }
  }

  export default Homepage;