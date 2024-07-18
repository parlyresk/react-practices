import React from 'react';
import data from './assets/json/data';
import CardList from './CardList';

import * as styles from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const statuses = ['ToDo', 'Doing', 'Done'];
    
    return (
        <div className={styles.Kanban_Board}>
            {statuses.map((status) => (
                <CardList 
                    
                    title={status} 
                    cards={data.filter(card => card.status === status)} 
                />
            ))}
        </div>
    );
}

export default KanbanBoard;