import React from 'react';
import Marquee from '../../Components/Marquee/Marquee'

export const extractMarquees = (marqueeListObj) => {
    const keys = Object.keys(marqueeListObj)
    return keys.map(key=>marqueeListObj[key])
    .map((obj,index,origArr)=><Marquee key={keys[index]} content1={obj.content1} content2={obj.content2} classType={obj.classType} typoType={obj.typoType} />);
}


export const getObjValue = (obj, ...params) => {
    let newVal = obj;

    params.forEach((param) => {
        newVal = newVal[param];
    })

    return newVal;
}


export const updateStateForCurrentMarquee = (motherComponent, marqueePropToChange, value) => {
    const currentState = motherComponent.state;
    const area = currentState.currentArea;
    const currentMarqueeId = currentState.currentMarqueeId;
    const copyAreaContent = {...currentState.areaContent};
    const marqueeConf = getObjValue(copyAreaContent, area, currentMarqueeId);
    copyAreaContent[area] = { ...copyAreaContent[area], [currentMarqueeId]: {...marqueeConf, [marqueePropToChange]: value} }
    motherComponent.setState({areaContent: copyAreaContent});
}