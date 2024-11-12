import Section from "../section/section";

import './our-service.scss'

const OurService = () => {
   const clazz = 'our-service';
   const containerClazz = '';
   return (
      <Section clazz={clazz} containerClazz={containerClazz}>
         <h2 className="title">Наші послуги</h2>
      </Section>
   );
}

export default OurService;