import React,{useState, useEffect} from 'react';
import Task from './Task';
import update from 'react-addons-update';
import * as styles from './assets/scss/TaskList.scss';

function TaskList({ tasks }) {
    
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    const toggleDone = (index) => {
        const newTaskList = [...taskList];
        newTaskList[index].done = !newTaskList[index].done;
        setTaskList(newTaskList);
    };
    
    
    
      
    return (
        <div className={styles.Task_List}>
            <ul>
                {taskList.map((task,index) => (
                    <Task 
                         
                        text={task.name} 
                        done={task.done} 
                        setDone={() => toggleDone(index)}
                    />
                ))}
            </ul>
            <input className={styles.Input_Add_Task} type="text" placeholder="태스크 추가" />
        </div>
    );
}

export default TaskList;