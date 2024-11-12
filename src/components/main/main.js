import Hero from "../hero/hero";
import OurService from "../our-service/our-service";
import About from "../about/about";
import Contacts from "../contacts/contacts";
const Main = () => {
   return (
      <main className="main">
         <Hero />
         <OurService />
         {/* <About /> */}
         <Contacts />
      </main>
   );
}

export default Main;