import Section from "../section/section";

import './hero.scss';

const Greeting = () => {
   const clazz = 'hero';
   const containerClazz = 'hero__container';
   return (
      <Section clazz={clazz} containerClazz={containerClazz}>
         <div className="hero__logo-wrap">
            <picture> 
               <source media="(max-width: 768px)" srcSet="/images/logo.png" /> 
               <source media="(min-width: 769px)" srcSet="/images/logo-desktop.png" width="700" /> 
               <img src="/images/logo.png" alt="логотип зелені дверцята" /> 
            </picture>
         </div>
         <h1>
            Центр дитячого розвитку, корекції та реабілітації
         </h1>
         <p>
            Сучасний Центр дитячого розвитку, корекції та реабілітації, де кожна дитина знаходить індивідуальний підхід до свого розвитку.
         </p>
         <p>
            Наша команда професіоналів пропонує унікальні програми корекції, спрямовані на розкриття потенціалу кожного малюка. 
         </p>
         <p>
            Використовуючи сучасні методи та інноваційні підходи, ми прагнемо створити навколишнє середовище, де кожен крок дитини - це крок до успіху. Довірся нам, і ми разом з вами прокладемо шлях до яскравого майбутнього для твоєї дитини.
         </p>
      </Section>
   );
}

export default Greeting;