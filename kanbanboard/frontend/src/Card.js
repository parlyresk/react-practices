import React, { useState } from 'react';
import TaskList from './TaskList';

import * as styles from './assets/scss/Card.scss';

function Card({ title, details, tasks }) {
    const [isOpen,setIsOpen] = useState(false);
    
    
    return (
        <div className={styles._Card}>
            
            <div
        className={`${styles.Card_Title} ${isOpen ? styles.Card_Title_Open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >{title}</div>
            <div className="Card_Details">
                {`${isOpen ? `${details}` : ''}`}
                
                <TaskList tasks={isOpen ? tasks : []} />
            </div>
        </div>
    );
}

export default Card;