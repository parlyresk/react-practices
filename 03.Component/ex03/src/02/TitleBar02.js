import React from 'react';

function TitleBar02() {
    
    const onHandler = function(){
        console.log('TitelBar02 click!');
    }




    return (
        <div>
            <h4 onClick={onHandler}>
                Function Handler in Function Component(click here!)
            </h4>
        </div>
    )
}

export default TitleBar02;