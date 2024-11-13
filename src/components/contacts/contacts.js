import Section from "../section/section";

import './contacts.scss'

const Contacts = () => {
   const clazz = 'contacts';
   const containerClazz = 'contacts__container';

   return (
      <Section clazz={clazz} containerClazz={containerClazz}>
         <address className="contacts-address">
            <h2 className="contacts__title title">Контакти</h2>
            <ul className="address-list">
               <li>
                  <svg width="16" height="16" fill="none"><path fill="#309B19" d="M3.94 12.037C6.597 14.69 8.916 16 11.022 16c1.21 0 2.349-.432 3.441-1.29a4.608 4.608 0 0 0 1.028-1.136c.181-.286.331-.59.448-.908a.981.981 0 0 0-.35-1.134L12.795 9.53a.985.985 0 0 0-1.337.184l-1.245 1.583a.218.218 0 0 1-.283.057 15.94 15.94 0 0 1-2.957-2.346 15.948 15.948 0 0 1-2.352-2.95.215.215 0 0 1 .057-.28L6.274 4.53A.98.98 0 0 0 6.45 3.2L4.442.409a.983.983 0 0 0-1.134-.35A4.643 4.643 0 0 0 1.616 1.13C.544 2.2 0 3.45 0 4.844c0 2.164 1.325 4.585 3.94 7.193Z"></path></svg>
                  <a className="address-list__phone" href="tel:+380977050040">097 705 00 40</a>
               </li>
               <li>
                  <svg width="12" height="16" fill="none"><path fill="#309B19" d="m.958 9.255.03.043c.036.055.075.108.113.167l4.343 6.244a.679.679 0 0 0 1.114 0l4.333-6.24.121-.166.027-.04A6.008 6.008 0 0 0 9.065.843 5.997 5.997 0 0 0 .73 3.132a6.007 6.007 0 0 0 .23 6.13l-.002-.008ZM6 3.505a2.499 2.499 0 0 1 2.452 2.99A2.502 2.502 0 0 1 5.044 8.32a2.5 2.5 0 0 1-.81-4.08A2.5 2.5 0 0 1 6 3.506Z"></path></svg>
                  <a href="https://maps.app.goo.gl/GArH7NuYUuumCR7B7" target="_blank" rel="noreferrer noopener"> м.Кременчук,<br/> вул. Майора Борщака, 12 </a>
               </li>
               <li>
                  <svg width="16" height="16" fill="none"><path fill="#309B19" d="M8 3.429A4.571 4.571 0 1 0 12.571 8 4.577 4.577 0 0 0 8 3.43ZM8.571 8a.59.59 0 0 1-.165.406L7.263 9.549a.58.58 0 0 1-.812 0 .576.576 0 0 1 0-.812l.978-.971V5.143a.571.571 0 1 1 1.142 0V8Z"></path><path fill="#309B19" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 13.714A5.715 5.715 0 1 1 13.714 8 5.724 5.724 0 0 1 8 13.714Z"></path></svg>
                  пн-сб 8:00 до 20:30
                  <br/> 
                  нед. - вихідний 
               </li>
            </ul>
         </address>
      </Section>
   );
}

export default Contacts;