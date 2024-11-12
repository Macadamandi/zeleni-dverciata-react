import Container from "../container/container" ;

const Section = ({clazz, containerClazz, children}) => {
   return (
      <section className={clazz}>
         <Container containerClazz={containerClazz}>
            {children}
         </Container>
      </section>
   );
}

export default Section;