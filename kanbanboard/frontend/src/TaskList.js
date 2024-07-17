import React,{useState} from 'react';
import Task from './Task';

import * as styles from './assets/scss/TaskList.scss';

function TaskList({ tasks }) {
    const setDone = (index)=>{
        index=!index;
    }
    
    
      
    return (
        <div className={styles.Task_List}>
            <ul>
                {tasks.map((task) => (
                    <Task 
                         
                        text={task.name} 
                        done={task.done} 
                        setDone={setDone}
                    />
                ))}
            </ul>
            <input className={styles.Input_Add_Task} type="text" placeholder="태스크 추가" />
        </div>
    );
}

export default TaskList;