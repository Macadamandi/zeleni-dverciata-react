import { Component } from 'react';

class CardsList extends Component {
   constructor(props) {
      super(props);
      this.cardsData = [
         {
            style: '#309b19',
            label: 'від 1,5 до 5,5 років',
            src: '/early-development.05cb4576.jpg',
            alt: 'Ранній розвиток',
            descr: '\u1F9F8 Ранній розвиток',
            price: 'від 120 грн',
         },
         {
            style: '#e63c15',
            label: 'від 5.5 років',
            src: '/preparation-for-school.138889bf.jpg',
            alt: 'Підготовка до школи',
            descr: '\u1F4D6 ПІДГОТОВКА ДО ШКОЛИ',
            price: 'від 140 грн',
         },
         {
            style: '#f2b03c',
            label: 'від 3.5 - 17 років',
            src: '/english.7c43c3c3.jpg',
            alt: 'Англійска',
            descr: '\u1F1EC\u1F1E7 АНГЛІЙСЬКА МОВА',
            price: 'від 120 грн',
         },
         {
            style: '#66a1d0',
            label: 'від 4.5 - 12 років',
            src: '/music.8a6d23ba.jpeg',
            alt: 'музика',
            descr: '\u1F3B9 МУЗИКА',
            price: '45хв - 140 грн',
         },
         {
            style: '#945e9d',
            label: 'від 1.5 до 5.5 років',
            src: '/kindergarten.22ff6499.jpg',
            alt: 'дитячий садок',
            descr: '\u1F9E9 ДИТЯЧИЙ САДОК ТА САДОК ВИХІДНОГО ДНЯ',
            price: '180 грн',
         },
         {
            style: '#a7c62c',
            label: 'від 2.5 до 14 років',
            src: '/drawing.d18f45cc.jpg',
            alt: 'студія малювання',
            descr: '\u1F3A8 СТУДІЯ МАЛЮВАННЯ ТА ЛІПЛЕННЯ',
            price: '180 грн',
         },
         {
            style: '#e7699e',
            label: 'від 2-х років',
            src: '/speech-therapist.8c0e43cd.jpg',
            alt: 'Заняття с логопедом',
            descr: '\u1F5E3\uFE0F ПСИХОЛОГ, ЛОГОПЕД, ДЕФЕКТОЛОГ',
            price: '- грн',
         },
         {
            style: '#fbe700',
            label: 'від 4.5 до 12 років',
            src: '/6.988a8267.jpg',
            alt: 'Заняття',
            descr: '\u1F4BB СТУДІЯ ТЕХНОША',
            price: '- грн',
         },
         {
            style: '#2d9218',
            label: 'від 6 до 11 років(1-5 класс)',
            src: '/4.919ebf35.jpg',
            alt: 'Заняття у классі',
            descr: '\u1F4DD ДОПОМОГА ШКОЛІ',
            price: '- грн/година',
         }

      ]

   }

   render() {
      return (
         <></>
      );
   }

}

export default CardsList;