import React from 'react';
import Card from './Card';
import * as styles from './assets/scss/CardList.scss';

function CardList({ title, cards }) {
    return (
        <div className={styles.Card_List}>
            <h1>{title}</h1>
            {cards.map((card) => (
                <Card
                    key={card.no} 
                    title={card.title}
                    details={card.description}
                    cardNo={card.no}
                />
            ))}
        </div>
    );
}

export default CardList;
