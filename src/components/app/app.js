import { Component } from 'react';

import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

import './app.scss'

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }


   render() {
      return (
         <>
            <Header/>
            <Main/>
            <Footer/>
         </>
      );
   }
}

export default App;