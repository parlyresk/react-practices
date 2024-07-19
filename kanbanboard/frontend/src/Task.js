import React from 'react';
import * as styles from './assets/scss/Task.scss';

function Task({ taskNo,text, done, setDone, deleteTask }) {
    return (
        <li className={styles._Task}>
            <input
                type="checkbox"
                checked={done === 'Y'}
                onChange={setDone}
            />
            
            {text}
            <a href="#" className={styles.Task_Remove} onClick={(e) => {
                e.preventDefault();
                deleteTask();
            }}></a>
        </li>
    );
}

export default Task;
