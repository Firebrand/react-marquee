import React from 'react';
import headerStyles from './Header.css';
import { extractMarquees } from '../../Libraries/Common/Common'

const Header = (props) => {

    const marquees = extractMarquees(props.marquees);

    return (
        <div className={headerStyles.header}>
            {marquees}
        </div>
    )
}

export default Header;