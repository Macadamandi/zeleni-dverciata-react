import { Component } from 'react';
import ServiceListItem from '../service-list-item/service-list-item'

import './service-list.scss'

class ServiceList extends Component {
   constructor(props) {
      super(props);
      this.cardsData = [
         {
            style: '#309b19',
            label: 'від 1,5 до 5,5 років',
            src: '/images/service-info/early-development.jpg',
            alt: 'Ранній розвиток',
            descr: '\u{1F9F8} Ранній розвиток',
            price: 'від 120 грн',
            attr: 'develop'
         },
         {
            style: '#e63c15',
            label: 'від 5.5 років',
            src: '/images/service-info/preparation-for-school.jpg',
            alt: 'Підготовка до школи',
            descr: '\u{1F4D6} ПІДГОТОВКА ДО ШКОЛИ',
            price: 'від 140 грн',
            attr: 'prepare'
         },
         {
            style: '#f2b03c',
            label: 'від 3.5 - 17 років',
            src: '/images/service-info/english.jpg',
            alt: 'Англійска',
            descr: '\u{1F1EC}\u{1F1E7} АНГЛІЙСЬКА МОВА',
            price: 'від 120 грн',
            attr: 'english'
         },
         {
            style: '#66a1d0',
            label: 'від 4.5 - 12 років',
            src: '/images/service-info/music.jpeg',
            alt: 'музика',
            descr: '\u{1F3B9} МУЗИКА',
            price: '45хв - 140 грн',
            attr: 'music'
         },
         {
            style: '#945e9d',
            label: 'від 1.5 до 5.5 років',
            src: '/images/service-info/kindergarten.jpg',
            alt: 'дитячий садок',
            descr: '\u{1F9E9} ДИТЯЧИЙ САДОК ТА САДОК ВИХІДНОГО ДНЯ',
            price: '180 грн',
            attr: 'kindergarten'
         },
         {
            style: '#a7c62c',
            label: 'від 2.5 до 14 років',
            src: '/images/service-info/drawing.jpg',
            alt: 'студія малювання',
            descr: '\u{1F3A8} СТУДІЯ МАЛЮВАННЯ ТА ЛІПЛЕННЯ',
            price: '180 грн',
            attr: 'painting'
         },
         {
            style: '#e7699e',
            label: 'від 2-х років',
            src: '/images/service-info/speech-therapist.jpg',
            alt: 'Заняття с логопедом',
            descr: '\u{1F5E3}\u{FE0F} ПСИХОЛОГ, ЛОГОПЕД, ДЕФЕКТОЛОГ',
            price: '- грн',
            attr: 'doctors'
         },
         {
            style: '#fbe700',
            label: 'від 4.5 до 12 років',
            src: '/images/service-info/6.jpg',
            alt: 'Заняття',
            descr: '\u{1F4BB} СТУДІЯ ТЕХНОША',
            price: '- грн',
            attr: 'technosha'
         },
         {
            style: '#2d9218',
            label: 'від 6 до 11 років(1-5 класс)',
            src: '/images/service-info/4.jpg',
            alt: 'Заняття у классі',
            descr: '\u{1F4DD} ДОПОМОГА ШКОЛІ',
            price: '- грн/година',
            attr: 'help'
         }

      ]

   }

   render() {
      let cards = this.cardsData.map(item => {
         return (
            <ServiceListItem key={item.attr} item={item}/>
         );
      });


      return (
         <ul className="our-service__list service-list">
            {cards}
         </ul>
      );
   }

}

export default ServiceList;