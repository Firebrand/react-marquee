import React from 'react';
import footerStyles from './Footer.css';
import { extractMarquees } from '../../Libraries/Common/Common'

const Footer = (props) => {

    const marquees = extractMarquees(props.marquees);
    
    return (
        <div className={footerStyles.footer}>
            {marquees}
        </div>
    )
}

export default Footer;