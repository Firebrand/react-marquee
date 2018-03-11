import React from 'react';
import mainStyles from './Main.css';
import { extractMarquees } from '../../Libraries/Common/Common'

const Main = (props) => {

    const marquees = extractMarquees(props.marquees);

    return (
        <div className={mainStyles.content}>
            {marquees}
        </div>
    )
}

export default Main;