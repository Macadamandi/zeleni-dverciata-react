import { Component } from "react";

import '../header/header.scss'

class SocialMediaLink extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         link: '',
         icon: ''
      }
   }

   localState = () => {
      this.setState(({name, link, icon}) => {
         return {
            name: this.props.list.name,
            link: this.props.list.link,
            icon: this.props.list.icon
         }
      })
   }

   render() {
      const {name, link, icon} = this.props.list;

      return (
         <li className="header__social-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
               <img src={icon} alt={name} width="30" />
            </a>
         </li>
      );
   }
}

export default SocialMediaLink;