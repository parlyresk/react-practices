import React from 'react';
import {_Email} from './assets/scss/Email.scss';

function Email({firstName, lastName, email}) {
    return (
        <li className={_Email}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href=''/>
            
            
        </li>
    );
}

export default Email;