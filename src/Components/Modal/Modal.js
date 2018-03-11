import React, { Component } from 'react';
import modalStyles from './Modal.css';


class Modal extends Component {
  
    render() {

    return (
        <div className={modalStyles.modalContainer}>
            <div className={modalStyles.modalContent}>
                <select onChange={this.props.areaSelectHandler}>
                    { 
                        this.props.layoutAreas.map( elem => <option value={elem} key={elem}>{elem}</option> ) 
                    }
                </select>
                <select onChange={this.props.changeMarqueeStyleHandler}>
                    { 
                        this.props.marqueeStyles.map( elem => <option value={elem} key={elem}>{elem}</option> ) 
                    }
                </select>
                <select onChange={this.props.changeMarqueeTypoHandler}>
                    { 
                        this.props.marqueeTypos.map( elem => <option value={elem} key={elem}>{elem}</option> ) 
                    }
                </select>
                <br/><br/>
                <textarea onChange={this.props.enterContentHandler1}></textarea>
                <textarea onChange={this.props.enterContentHandler2}></textarea>
            </div>
        </div>
    );
  }
}

export default Modal;
