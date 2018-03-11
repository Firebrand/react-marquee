import React from 'react';
import rightStyles from './Right.css';
import { extractMarquees } from '../../Libraries/Common/Common'

const Right = (props) => {

    const marquees = extractMarquees(props.marquees);
    
    return (
        <div className={rightStyles.right}>
            {marquees}
        </div>
    )
}

export default Right;