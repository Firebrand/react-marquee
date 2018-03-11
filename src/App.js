import React, { Component } from 'react';
import appStyles from './App.css';
import Header from './Layout/Header/Header';
import Main from './Layout/Main/Main';
import Left from './Layout/Left/Left';
import Right from './Layout/Right/Right';
import Footer from './Layout/Footer/Footer';
import Modal from './Components/Modal/Modal';
import MarqueeChoices from './Components/Marquee/MarqueeChoices.css';
import MarqueeTypos from './Components/Marquee/MarqueeTypo.css';
import {getObjValue} from './Libraries/Common/Common';

class App extends Component {
  state = {
    areaContent: {
      Header: {},
      Left: {},
      Main: {},
      Right: {},
      Footer: {}
    },
    currentMarqueeId: null,
    currentArea: ''
  }


  areaSelectHandler = (event) => {
    const area = event.target.value;
    const currentMarqueeId = Date.now();
    const copyAreaContent = {...this.state.areaContent};
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {content:'Fresh!'} }
    this.setState(
    {areaContent: copyAreaContent, 
    currentMarqueeId: currentMarqueeId,
    currentArea: area});
  }

  enterContentHandler1 = (event) => {
    const area = this.state.currentArea;
    const currentMarqueeId =this.state.currentMarqueeId;
    const copyAreaContent = {...this.state.areaContent};
    const marqueeConf = getObjValue(copyAreaContent, area, currentMarqueeId);
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {...marqueeConf, content1: event.target.value} }
    this.setState({areaContent: copyAreaContent});
  }

  enterContentHandler2 = (event) => {
    const area = this.state.currentArea;
    const currentMarqueeId =this.state.currentMarqueeId;
    const copyAreaContent = {...this.state.areaContent};
    const marqueeConf = getObjValue(copyAreaContent, area, currentMarqueeId);
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {...marqueeConf, content2: event.target.value} }
    this.setState({areaContent: copyAreaContent});
  }

  changeMarqueeStyleHandler = (event) => {
    const area = this.state.currentArea;
    const currentMarqueeId =this.state.currentMarqueeId;
    const copyAreaContent = {...this.state.areaContent};
    const marqueeConf = getObjValue(copyAreaContent, area, currentMarqueeId);
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {...marqueeConf, classType: event.target.value} }
    this.setState({areaContent: copyAreaContent});
  }

  changeMarqueeTypoHandler = (event) => {
    const area = this.state.currentArea;
    const currentMarqueeId =this.state.currentMarqueeId;
    const copyAreaContent = {...this.state.areaContent};
    const marqueeConf = getObjValue(copyAreaContent, area, currentMarqueeId);
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {...marqueeConf, typoType: event.target.value} }
    this.setState({areaContent: copyAreaContent});
  }

  render() {
    return (
      <React.Fragment>
      <Modal layoutAreas={Object.keys(this.state.areaContent)} 
      areaSelectHandler={this.areaSelectHandler} 
      enterContentHandler1={this.enterContentHandler1}
      enterContentHandler2={this.enterContentHandler2}
      marqueeStyles={Object.keys(MarqueeChoices)}
      marqueeTypos={Object.keys(MarqueeTypos)}
      changeMarqueeStyleHandler = {this.changeMarqueeStyleHandler} 
      changeMarqueeTypoHandler = {this.changeMarqueeTypoHandler}
      />
      <Header marquees={this.state.areaContent.Header} />
      <div className={appStyles.appBody}>
            <Left marquees={this.state.areaContent.Left} />
            <Main marquees={this.state.areaContent.Main} />
            <Right marquees={this.state.areaContent.Right} />
      </div>
      <Footer marquees={this.state.areaContent.Footer} />
      </React.Fragment>
    );
  }
}

export default App;
