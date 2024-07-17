import React from 'react';

import * as styles from './assets/scss/Task.scss';

function Task({ text, done,setDone }) {
    

    return (
        <li className={styles._Task}>
            <input type="checkbox" checked={done}  
            onClick={setDone} />
            {text}
            <a href="#" className={styles.Task_Remove}></a>
        </li>
    );
}

export default Task;