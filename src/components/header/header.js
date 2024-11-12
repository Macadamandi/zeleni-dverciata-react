import Container from "../container/container";
import SocialMedia from "../social-media/social-media";

import './header.scss'

const Header = () => {
   const clazz = 'd-flex header__container justify-content-between'
   return (
      <header className="header">
         <Container containerClazz={clazz}>
            <SocialMedia/>
         </Container>
      </header>
   );
}

export default Header;