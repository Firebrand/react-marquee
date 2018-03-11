import React from 'react';
import marqueeStyles from './MarqueeChoices.css';
import marqueeTypos from './MarqueeTypo.css';


const Marquee = (props) => {
    return (
        <div className={`${marqueeStyles[props.classType]} ${marqueeTypos[props.typoType]}`} >
            <div className="content1" dangerouslySetInnerHTML={{__html: props.content1}} />
            <div className="content2" dangerouslySetInnerHTML={{__html: props.content2}} />
        </div>
    )
}

export default Marquee;