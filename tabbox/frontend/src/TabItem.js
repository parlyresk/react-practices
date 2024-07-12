import React from 'react';
import './assets/scss/TabItem.scss';
function TabItem({name, active}) {
    return (
        <li className={active ? 'active' : ''}>{name}</li>
    );
}

export default TabItem;