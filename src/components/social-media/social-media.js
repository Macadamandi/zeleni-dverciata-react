import { Component } from "react";

import SocialMediaLink from "../social-media-link/social-media-link";

import '../header/header.scss'

class SocialMedia extends Component {
   constructor(props) {
      super(props);
      this.socialMedia = [
         { 
            name: 'instagram',
            link: 'https://www.instagram.com/zeleni_dveri/',
            icon: '/images/icons/instagram.svg'
         },
         { 
            name: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=100090750423402',
            icon: '/images/icons/facebook.svg'
         }
      ]
   }
   
   render() {
      const listOfSocialMedia = this.socialMedia.map(item => {
         return (
            <SocialMediaLink key={item.name} list={item}/>
         );
      })
      return (
         <ul className="header__social">
            {listOfSocialMedia}
         </ul>
      );
   }
}

export default SocialMedia;