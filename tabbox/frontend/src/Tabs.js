import React from 'react';
import TabItem from './TabItem';
import './assets/scss/Tabs.scss';
function Tabs({tabs}) {
    return (
        <ul>
            {tabs.map(t => <TabItem key={t.no} name={t.name} active={t.active} />)}
        </ul>
    );
}

export default Tabs;