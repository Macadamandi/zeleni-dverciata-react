import { Component } from "react";

import './modal.scss';

class Modal extends Component {
   constructor(props) {
      super(props);
      this.infoData = {
         develop: this.onDevelop,
         prepare: this.onPrepare,
         english: this.onEnglish,
         music: this.onMusic,
         kindergarten: this.onKindergarten,
         painting: this.onPainting,
         doctors: this.onDoctors,
         technosha: this.onTechnosha,
         help: this.onHelp
      }
   }

   onDevelop = () => {
      return (
         <div className="lesson-info open">
            <div className="lesson-info__container">
               <button type="button" onClick={this.props.closeModal} className="lesson-info__button-close">✕</button>
               <p><b>ВІК: {this.props.label}</b></p>
               <h3 className="lesson-info__title">{this.props.descr}<br /></h3>
               <ul className="lesson-info__list">
                  <li>На розвиваючих заняттях ми працюємо над розвитком мислення, мовлення;</li>
                  <li>граємо в ігри на збільшення словникового запасу, на розвиток дрібної моторики, а також займаємось розвитком пам'яті, уваги та уяви;🥎</li>
                  <li>Проводимо динамічні паузи, які включають вправи на масажній доріжці, елементи логоритмики, грубої та тонкої моторики;🛝</li>
                  <li>Займаємось творчою діяльністю (ліпимо, клеїмо, вирізаємо, малюємо, творимо та витворяємо);🎨🧑🏼‍🔬👨🏼‍🎨</li>
                  <li>Граємо в сюжетно-рольові гри і просто весело проводимо час з малюками;🦸🏼‍♀️🎠</li>
               </ul>
               <h3>Коли?</h3>
               <dl className="lesson-info__list-working-time">
                  <div className="lesson-info__working-time">
                     <dt>
                        <h5>МАЛЮКИ 1,6 - 3 роки</h5>
                     </dt>
                     <dd>
                        <p>Вт, Чт: <time dateTime="18:00">18:00</time> - <time dateTime="19:00">19:00</time></p>
                        <p>Ср, Пт: <time dateTime="16:00">16:00</time> - <time dateTime="17:00">17:00</time>.</p>
                     </dd>
                  </div>
                  <div className="lesson-info__working-time">
                     <dt>
                        <h5>СТАРШІ 3 - 5 років</h5>
                     </dt>
                     <dd>
                        <p>Пн, Пт: <time dateTime="16:15">16:15</time> - <time dateTime="18:15">18:15</time></p>
                        <p>Ср, Пт: <time dateTime="17:00">17:00</time> - <time dateTime="18:00">18:00</time>.</p>
                     </dd>
                  </div>
               </dl>
               <dl className="lesson-info__price">
                  <div>
                     <dt>
                        <h3>Ціна:</h3>
                     </dt>
                     <dd>
                        <p><strong>1 год - 120 грн</strong></p>
                        <p><strong>2 год - 160 грн</strong></p>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      );
   }

   onPrepare = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autofocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 5.5 років</b></p>
               <h3 className="lesson-info__title"> 📚ПІДГОТОВКА ДО ШКОЛИ </h3>
               <ul className="lesson-info__list">
                  <li>Підготовка до школи важливий етап у розвитку кожної дитини.👱‍♀️👱‍♂️</li>
                  <li>Мовлення, письмо, читання, соціальна адаптація-усе це невід'ємні складові розвитку дитини.</li>
                  <li> Ми пропонуємо підготовчі заняття до школи за унікальною авторською методикою, які передбачають:
                     <ul className="lesson-info__list-advantages">
                        <li>читання;📙</li>
                        <li>математику;🧮</li>
                        <li>знання про навколишній світ;🌏</li>
                        <li>розвиток уміння навчатися, здатності до аналізу та синтезу, узагальнення і формування понять;</li>
                        <li>розвиток організованості, упевненості.</li>
                     </ul>
                  </li>
                  <li>А також заняття з АНГЛІЙСЬКОЇ МОВИ 📚в ігровій формі,які допоможуть дитині упевнено почуватися на уроках англійської в першому класі і надалі.📝</li>
                  <li>Діти вивчають всю основну лексику, вчаться розуміти на слух просте мовлення, говорять англійською за зразком,вчать вірші та грають в ігри за темою.✨</li>
                  <li>Усі заняття цікаві та ефективні!</li>
               </ul>
               <dl className="lesson-info__price">
                  <div>
                     <dt>
                        <h3>Ціна:</h3>
                     </dt>
                     <dd>
                        <p><strong>45 хв - 140 грн лише англійська</strong></p>
                        <p><strong>1 год - 140 грн без англійської</strong></p>
                        <p><strong>2 год - 240 грн підготовка з англійською</strong></p>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      );

   }

   onEnglish = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 5.5 років</b></p>
               <h3 className="lesson-info__title"> 🇬🇧 АНГЛІЙСЬКА МОВА </h3>
               <h4>Рідко зустрінеш школяра, який щиро любить проводити багато часу за підручниками та в захваті від навчання. Як зацікавити дитину ще й додатковими уроками англійської мови? Ми знаємо відповідь на це питання!</h4>
               <ul className="lesson-info__list">
                  <li>📌 По-перше ми проводимо ефективні заняття з гарною репутацією та відгуками.</li>
                  <li>📌 По-друге ми надаємо захопливу самостійну роботу, завдяки якій дитина полюбить іноземну та буде з радістю її вивчати.</li>
                  <li>📌 По-третє працюємо за сучасними методиками, в формі гри вивчаємо нові слова, вчимося вести діалог, ставити та відповідати на питання, розуміти на слух просте мовлення, вчимо вірші та граємо в ігри за темою. І постійно вдосконалюємось!</li>
                  <li>Усі заняття цікаві та ефективні!</li>
                  <li>Також маємо індивідуальний підхід до кожної дитини та підлаштовуємось під її потреби в знаннях.</li>
                  <li>В групі-5-7 дітей</li>
               </ul>
               <dl className="lesson-info__price">
                  <div>
                     <dt>
                        <h3>Ціна:</h3>
                     </dt>
                     <dd>
                        <p><strong>45 хв - 140 грн</strong></p>
                        <p><strong>45 хв - 120 грн (для тих, хто відвідує декілька гуртків)</strong></p>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      );
   }

   onMusic = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 4.5 до 12 років</b></p>
               <h3 className="lesson-info__title"> 🎹 МУЗИКА </h3>
               <p>А чи знаєте ви, що таке музичне виховання і яка його роль у розвитку дітей?</p>
               <p>Ні, це не набридле вивчення гам і повторення нот. Це цілий світ, що звучить кольоровими мелодіями, заповнює світ дитини казковими фантазіями, веде в загадкову казку.</p>
               <p>Це розвиток слуху, який так необхідний для засвоєння не тільки рідної, а й іноземної мови, розвиток пам’яті і уваги та артистичних здібностей.</p>
               <p>Спів оздоровлює весь організм. Під час заняття вокалом ми використовуємо все тіло як музичний інструмент: розвивається дихальна система, покращується робота серця та нормалізується тиск. Також доведено, що люди, які регулярно займаються вокалом, рідше хворіють на застуду та підхоплюють інші хвороби, адже спів підвищує імунітет.</p>
               <ul className="lesson-info__list">
                  <li>1 етап - донотний період</li>
                  <li>2 етап - засвоєння нотної грамоти</li>
                  <li>3 етап - ази освоєння гри на синтезаторі</li>
               </ul>
               <dl className="lesson-info__price">
                  <div>
                     <dt><h3>Ціна:</h3></dt>
                     <dd><p><strong>45 хв - 140 грн</strong></p></dd>
                  </div>
               </dl>
            </div>
         </div>
      );
   }

   onKindergarten = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 1.5 до 5.5 років</b></p>
               <h3 className="lesson-info__title">🧩ДИТЯЧИЙ САДОК ТА САДОК ВИХІДНОГО ДНЯ</h3>
               <h4>В нашому садочку ми проводимо заняття за темами тижня, які направлені на розвиток звʼязного мовлення.</h4>
               <ul className="lesson-info__list">
                  <li>Займаємось логоритмікою.</li>
                  <li>Проводимо заняття на укріплення скелету та основних мʼязів за допомогою фізичних вправ, вчимо відтворювати танцювальні рухи під музику.💃🏼</li>
                  <li>Працюємо над розвитком елементарних математичних уявлень.</li>
               </ul>
               <h4>А також у складі занять використовуємо:</h4>
               <ul className="lesson-info__list">
                  <li>психогімнастику</li>
                  <li>пальчикову та нейрогімнастику</li>
                  <li>обовʼязкові творчі частини, де діти із задоволенням клеють, вирізають, ліплять, малюють та створюють щось нове та неповторне!🎨✂️🖌️</li>
                  <li>Проводимо різноманітні досліди, експерименти тематичні вечірки та свята!🦹🏼👯</li>
               </ul>
               <h4>Наше головне завдання щоб заняття для дошкільнят викликали в дітей інтерес до пізнання світу. Без харчування, лише вода та печиво.</h4>
               <dl className="lesson-info__price">
                  <div>
                     <dt><h3>Ціна:</h3></dt>
                     <dd>
                        <p><strong>180 грн</strong></p>
                        <p>Понеділок та Суббота: <br /> з <time dateTime="09:00">09:00</time> до <time dateTime="13:00">13:00</time></p>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      );
   }

   onPainting = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 2.5 до 14 років</b></p>
               <h3 className="lesson-info__title">🎨СТУДІЯ МАЛЮВАННЯ ТА ЛІПЛЕННЯ</h3>
               <h4>Чудова можливість провести весело та з користю час і принести додому власну картину!</h4>
               <ul className="lesson-info__list">
                  <li>🖼️ На заняттях діти вдосконалюють дрібну моторику, розвивають кругозір та весело проводять час в колі однолітків!</li>
                  <li>А також можуть побути не лише в ролі художника, а і скульптора та поліпити з полімерної глини.</li>
                  <li>Сучасний підхід до розвитку особистості. 🖌️</li>
                  <li>Всі матеріали наші💞</li>
               </ul>
               <dl className="lesson-info__price">
                  <div>
                     <dt><h3>Ціна:</h3></dt>
                     <dd>
                        <p><strong>180 грн - 2 години</strong></p>
                        <hr />
                        <p><strong>Вт - Чт</strong> <br /> з <time dateTime="16:40">16:40</time> до <time dateTime="18:40">18:40</time></p>
                        <p><strong>Пт:</strong> <br /> з <time dateTime="15:00">15:00</time> до <time dateTime="17:00">17:00</time></p>
                        <p><strong>Сб:</strong> <br /> з <time dateTime="10:00">10:00</time> до <time dateTime="12:00">12:00</time></p>
                     </dd>
                  </div>
               </dl>
            </div>
         </div>
      );
   }

   onDoctors = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 2-х років</b></p>
               <h3 className="lesson-info__title">🗣️ПСИХОЛОГ, ЛОГОПЕД, ДЕФЕКТОЛОГ</h3>
               <p>
                  Наш психолог допоможе Вам знайти спільну мову з підлітками, роз'яснить моменти, які викликають труднощі у відносинах батьків і дітей,
                  впорається з дитячими страхами, тривожністю, фобіями, комплексами та проблемами, які пов'язані з адаптацією у дитячому колективі садочка чи школи та багатьма іншими запитами.👥
               </p>
               <p>Ваша дитина буде психологічно підготовлена, соціалізована і адаптована до життя в колективі!🌈</p>
               <p>
                  Є консультації для ДІТЕЙ та ДОРОСЛИХ, а також комплексні корекційні заняття з логопедом і дефектологом, які пов'язані з корекцією розвитку когнітивної сфери при певних затримках.
               </p>
               <p>
                  Наші логопеди займаються корекцією звуковимови, певними труднощами при запуску мовлення чи затримці мовленнєвого розвитку. Мають допуск до проведення логопедичного масажу.👅
               </p>
               <p>
                  Наш дефектолог, на відміну від логопеда, не виправляє дефекти мовлення, а допомагає малюку правильно висловлювати власні думки. Він за допомогою гри та ігрових вправ коригує відхилення, викликані різноманітними порушеннями.
               </p>
            </div>
         </div>
      );
   }

   onTechnosha = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 2-х років</b></p>
               <h3 className="lesson-info__title">💻СТУДІЯ ТЕХНОША</h3>
               <ul className="lesson-info__list">
                  <li>
                     <h4>🎮Робототехніка для малят (від 4,5 до 7 років)</h4>
                     <p>
                        Курс робототехніки для маленьких геніїв дає чудову змогу розвивати свою дитину в незвичному напрямку змалку. Тут наші найменші учні будують роботів, навчаються працювати із комп'ютером, та в ігровій формі вивчають доволі складні поняття у програмуванні роботів. На заняттях ми розвиваємо дрібну моторику (а вона відповідає за розвиток мозкової діяльності), увагу, уяву, мислення, посидючість, вміння спілкуватись у колективі. Долучайтесь, набір маленьких геніїв триває!
                     </p>
                  </li>
                  <li>
                     <h4>🎮Робототехніка для юних геніїв (8-10 років)</h4>
                     <p>
                        Робототехніка для юних геніїв - чудовий розвиваючий курс для дітей віком від 7 до 10 років. Тут ми будуємо роботів та вчимося їх програмувати, вивчаємо основи механіки та базові закони фізики, вчимося свої знання застосовувати на практиці, а також найголовніше: вживу спілкуємось в колективі одноліток-однодумців (що особливо цінне саме зараз!) У нас дітям цікаво, корисно, розвиваюче і обов'язково весело.
                     </p>
                  </li>
                  <li>
                     <h4>🎮Робототехніка для майже дорослих геніїв (вік 11+)</h4>
                     <p>
                        Курс робототехніки для вже майже дорослих геніїв (від 11 років). Для багатьох дорослих людей - це вже просто космос, якась інша галактика... А для наших учнів - можливість розвивати математичні, інженерні, програмувальні навички у дууууже цікавій, захоплюючій формі! Запрошуємо, долучайте своїх дітей до мега-крутих розвиваючих занять!
                     </p>
                  </li>
                  <li>
                     <h4>🎮Курси програмування мають дві вікових групи:</h4>
                     <p>
                        перша - до 12 років (поглиблене вивчення блокової програми Scratch), друга - до 16 років (вже доросла мова програмування Python) Яка особливість наших курсів програмування? - в нас мега-крутий викладач, який вміє ну дууууже доступно, на цікавих і простих прикладах із життя донести дітям складні поняття. І це прямо супер класно! Запрошуємо! Долучайте своїх юних комп'ютерних геніїв до світу програмування, створення власних анімованих листівок, казок, історій та ігор!
                     </p>
                  </li>
                  <li>
                     <h4>🎮Інтегрований курс для учнів 2-4 класів</h4>
                     <p>"Робототехніка+ програмування"</p>
                  </li>
                  <li>
                     <h4>🎮Графічний дизайн</h4>
                     <p>
                        На курсі графічного дизайну діти вчаться обробляти фото, створювати власні картинки, колажі, малювати у графічних редакторах. Починаємо від самого початку і поступово йдемо до більш складних робіт.
                     </p>
                  </li>
               </ul>
               <div>
                  Деталі за тел: <a href="tel:+380977566132">097 75 66 132</a>
               </div>
            </div>
         </div>
      );
   }

   onHelp = () => {
      return (
         <div className="lesson-info">
            <div className="lesson-info__container">
               <button type="button" autoFocus className="lesson-info__button-close" onClick={this.props.closeModal}>✕</button>
               <p><b>ВІК: від 6 до 11 років(1-5 клас)</b></p>
               <h3 className="lesson-info__title">📝ДОПОМОГА ШКОЛІ</h3>
               <h4>Якщо Ваша дитина має прогалини в знаннях, щось не встигає чи не розуміє на уроках, запрошуємо до наших репетиторів!</h4>
               <ul className="lesson-info__list">
                  <li>Ми навчимо правильно і швидко рахувати та вирішувати логічні завдання.🧮</li>
                  <li>Навчимо читати по складам, цілими словами та розвитку зв’язного мовлення, артикуляційної гімнастики.📚</li>
                  <li>Навчимо аналізу, синтезу, узагальнення та формування понять;</li>
               </ul>
            </div>
         </div>
      );
   }

   render() {
      const { attr } = this.props;

      for (const key in this.infoData) {
         if (attr === key) {
            console.log('yes');
            return (
               <>
                  {this.infoData[key]()}
               </>
            );
         }
         console.log(`${key} - ${attr}`);
      }

   }
}
export default Modal;