import React, { useState, useEffect } from 'react';
import Task from './Task';
import * as styles from './assets/scss/TaskList.scss';

function TaskList({  cardNo }) {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            
            const response = await fetch(`/api/tasks?cardNo=${cardNo}`);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if (json.result === 'success') {
                setTaskList(json.data);
            } else {
                throw new Error(json.message);
            }
        } catch (err) {
            console.error('Fetch error:', err);
        }
    };

    const toggleDone = async (index) => {
        const task = taskList[index];
        try {
            const response = await fetch(`/api/tasks/${task.no}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...task, done: task.done === 'Y' ? 'N' : 'Y' }),
            });
    
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
            if (json.result === 'success') {
                const newTaskList = [...taskList];
                newTaskList[index].done = json.data.done; 
                setTaskList(newTaskList);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const addTask = async (taskName) => {
        try {
            // GET 요청으로 taskNo를 받아옵니다.
            const taskNoResponse = await fetch('/api/taskno', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!taskNoResponse.ok) {
                throw new Error(`${taskNoResponse.status} ${taskNoResponse.statusText}`);
            }
    
            const taskNoJson = await taskNoResponse.json();
            const taskNo = taskNoJson.data; // taskNo 값 추출
    
            // POST 요청으로 새로운 태스크를 생성합니다.
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ no: taskNo, name: taskName, done: 'N', cardNo }),
            });
    
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
            if (json.result === 'success') {
                setTaskList([...taskList, json.data]);
            }
        } catch (err) {
            console.error(err);
        }
    };
    

    const deleteTask = async (index) => {
        const task = taskList[index];
        try {
            const response = await fetch(`/api/tasks/${task.no}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
    
            const json = await response.json();
            if (json.result === 'success') {
                const newTaskList = taskList.filter((_, i) => i !== index);
                setTaskList(newTaskList);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleAddTask = (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTask(e.target.value);
            e.target.value = '';
        }
    };

    return (
        <div className={styles.Task_List}>
            <ul>
                {taskList.map((task, index) => (
                    <Task
                        key={task.no} 
                        taskNo={task.no}
                        text={task.name}
                        done={task.done}
                        setDone={() => toggleDone(index)}
                        deleteTask={() => deleteTask(index)}
                    />
                ))}
            </ul>
            <input
                className={styles.Input_Add_Task}
                type="text"
                placeholder="태스크 추가"
                onKeyDown={handleAddTask}
            />
        </div>
    );
}

export default TaskList;
