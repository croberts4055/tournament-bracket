import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import BrandInfo from '../BrandInfo/BrandInfo';
import Footer from '../Footer/Footer';


class Homepage extends Component {
    render() {
      return (
        <div>
            <MyNav/> 
            <BrandInfo />
            <Footer/>
        </div>
      );
    }
  }

  export default Homepage;