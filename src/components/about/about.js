import Section from "../section/section";

import './about.scss';

const About = () => {
   const clazz = 'about';
   const containerClazz = '';
   return (
      <Section clazz={clazz} containerClazz={containerClazz}>
         <p>
            У нашому Центрі дитячого розвитку ми не лише надаємо ефективні програми корекції, але і створюємо атмосферу тепла та розуміння. Кожна дитина - особлива і унікальна, і саме тому ми докладаємо зусиль, щоб кожна з них відчула себе частиною великої та підтримуючої спільноти. З нашим Центром ваша дитина отримає не лише необхідну допомогу, а й зможе відкрити для себе світ нових можливостей та досягнень.
         </p>
      </Section>
   );
}

export default About;