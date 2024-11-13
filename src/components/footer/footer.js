import Container from "../container/container";

import './footer.scss';

const Footer = () => {
   const containerClazz = 'footer__container';
   return (
      <footer className="footer">
         <Container containerClazz={containerClazz}>
         <h2 className="footer__title"> Центр дитячого розвитку, корекції та реабілітації "Зелені Дверцята" </h2>
         <address>
            <a href="https://maps.app.goo.gl/GArH7NuYUuumCR7B7" target="_blank" rel="noreferrer noopener"> м. Кременчук,<br /> вул. Майора Борщака, 12 </a>
            <div> пн-сб 8:00 до 20:30 <br /> нед. - вихідний </div>
            <a href="tel:+380977050040">097 705 00 40</a>
         </address>
         <p>© <span id="footer__copyright-year" className="footer__copyright-year">2024</span> - Всі права захищені</p>
         <p className="footer__site-create-by">Сайт cтворив <a href="https://baronin.github.io" target="_blank" rel="noreferrer noopener">Yaroslav Baronin</a></p>
         <p className="footer__site-create-by">Дизайнер сайту <a href="mailto:mostovenko.pro@gmail.com" target="_blank" rel="noreferrer noopener">Vitaliy Mostovenko</a></p>
         </Container>
      </footer>
   );
}

export default Footer;