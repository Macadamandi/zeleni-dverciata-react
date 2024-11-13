import Container from "../container/container" ;
import Map from "../map/map";

const Section = ({clazz, containerClazz, children}) => {
   if (clazz === 'contacts') {
      return (
         <section className={clazz}>
            <Container containerClazz={containerClazz}>
               {children}
            </Container>
            <Map/>
         </section>
      );
   } else {
      return (
         <section className={clazz}>
            <Container containerClazz={containerClazz}>
               {children}
            </Container>
         </section>
      );
   }
}

export default Section;