import React from 'react';
import data from './assets/json/data';
import CardList from './CardList';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const statuses = ['ToDo', 'Doing', 'Done'];
    
    return (
        <div className="Kanban_Board">
            {statuses.map((status, index) => (
                <CardList 
                    key={index} 
                    title={status} 
                    cards={data.filter(card => card.status === status)} 
                />
            ))}
        </div>
    );
}

export default KanbanBoard;