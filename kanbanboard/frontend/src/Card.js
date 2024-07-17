import React, { useState } from 'react';
import TaskList from './TaskList';
import {_Card} from './assets/scss/Card.scss';

function Card({ title, details, tasks }) {
    const [isOpen,setIsOpen] = useState(false);
    
    
    return (
        <div className="_Card">
            <div className={`Card_Title ${isOpen ? 'Card_Title_Open' : ''}`}
            onClick={()=>{setIsOpen(!isOpen)}}>{title}</div>
            <div className="Card_Details">
                {details}
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}

export default Card;