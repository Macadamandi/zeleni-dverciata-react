import { Component } from "react";
import Modal from "../modal/modal";

import '../service-list/service-list.scss';
import '../service-list-item/service-list-item.scss'

class SeviceListItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showModal: false
      }
   }

   onModal = () => {
      this.setState({ showModal: true });
   }

   closeModal = () => {
      this.setState({ showModal: false });
   }

   render() {
      const { style, label, src, alt, descr, price, attr } = this.props.item;
      console.log(attr);
      return (
         <>
            <li className="service-list__item" style={{ borderBottom: `4px solid ${style}` }}>
               <div className="service-info">
                  <span className="service-info__label">{label}</span>
                  <img src={src} alt={alt} />
                  <h3 className="service-info__desc">{descr}</h3>
                  <p>{price}</p>
                  <button onClick={this.onModal} className="service-info__btn-learn-more">дізнатись більше</button>
                  <>
                     {
                        this.state.showModal && (
                           <Modal label={label} descr={descr} attr={attr} closeModal={this.closeModal}/>
                        )
                     }
                  </>
               </div>
            </li>
         </>
      );
   }
}

export default SeviceListItem;