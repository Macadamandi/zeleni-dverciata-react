import Section from "../section/section";
import ServiceList from "../service-list/service-list";

import './our-service.scss'

const OurService = () => {
   const clazz = 'our-service';
   const containerClazz = '';
   return (
      <Section clazz={clazz} containerClazz={containerClazz}>
         <h2 className="title">Наші послуги</h2>
         <ServiceList/>
      </Section>
   );
}

export default OurService;