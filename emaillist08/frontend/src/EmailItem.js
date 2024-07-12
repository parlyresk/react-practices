import React from 'react';

function EmailItem({ name, email }) {
    return (
        <li>
            {name}
            <br />
            {email}
        </li>
    );
}

export default EmailItem;
