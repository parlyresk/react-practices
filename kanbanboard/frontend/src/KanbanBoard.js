import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import * as styles from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const [cards, setCards] = useState([]);
    const statuses = ['ToDo', 'Doing', 'Done'];

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await fetch('/api/cards');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if (json.result === 'success') {
                setCards(json.data);
            } else {
                throw new Error(json.message);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    return (
        <div className={styles.Kanban_Board}>
            {statuses.map((status) => (
                <CardList
                    key={status} 
                    title={status}
                    cards={cards.filter(card => card.status === status)}
                />
            ))}
        </div>
    );
}

export default KanbanBoard;
