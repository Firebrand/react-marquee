import React from 'react';
import leftStyles from './Left.css';
import { extractMarquees } from '../../Libraries/Common/Common'

const Left = (props) => {

    const marquees = extractMarquees(props.marquees);

    return (
        <div className={leftStyles.left}>
            {marquees}
        </div>
    )
}

export default Left;