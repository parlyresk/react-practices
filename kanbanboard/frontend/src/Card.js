import React from 'react';
import TaskList from './TaskList';
import {_Card} from './assets/scss/Card.scss';

function Card({ title, details, tasks }) {
    return (
        <div className="_Card">
            <div className="Card_Title">{title}</div>
            <div className="Card_Details">
                {details}
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}

export default Card;