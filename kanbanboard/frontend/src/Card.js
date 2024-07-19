import React, { useState } from 'react';
import TaskList from './TaskList';
import * as styles from './assets/scss/Card.scss';

function Card({ title, details, cardNo }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className={styles._Card}>
            <div
                className={`${styles.Card_Title} ${isOpen ? styles.Card_Title_Open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </div>
            {isOpen && (
                <div className="Card_Details">
                    
                    {details}
                    <TaskList cardNo={cardNo} />
                </div>
            )}
        </div>
    );
}

export default Card;
