import React, {useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import tabs from './assets/json/data';

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0);

    

    return (
        <div className={Tab_Box}>
            <Tabs
                selectTab={(no) => {
                    // const index=tabs.map(e=>e.no).indexOf(no);
                    
                    setActiveIndex(tabs.findIndex(e=>e.no === no));
                }} 
                tabs={tabs.map((e, i) => {
                    const {contents, ...rest} = e;
                
                    if(i === activeIndex) {
                    rest.active = true;
                    }

                    return rest;
                })}/>
            <TabView contents={tabs[activeIndex].contents} />
        </div>
    );
}

export default TabBox;