import React from 'react';
import Card from './Card';

import * as styles from './assets/scss/CardList.scss';

function CardList({ title, cards }) {
    return (
        <div className={styles.Card_List}>
            <h1>{title}</h1>
            {cards.map((card) => (
                <Card 
                    
                    title={card.title} 
                    details={card.description} 
                    tasks={card.tasks} 
                />
            ))}
        </div>
    );
}

export default CardList;