import React from 'react';
import EmailItem from './EmailItem';
import './assets/scss/Emaillist.scss';
function Emaillist() {
    const emails = [
        { name: '둘리', email: 'dooly@gmail.com' },
        { name: '마이콜', email: 'michol@gmail.com' },
        { name: '도우너', email: 'douner@gmail.com' },
        { name: '또치', email: 'ddochi@gmail.com' }
    ];

    return (
        <ul className="Emaillist">
            {emails.map((emailItem, index) => (
                <EmailItem key={index} name={emailItem.name} email={emailItem.email} />
            ))}
        </ul>
    );
}

export default Emaillist;
