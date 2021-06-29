import React, { useState } from 'react'
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, removeToDo } from '../redux/actions';
import { todoReducer } from '../redux/reducer/todoReducer'
const Main = () => {
    const [inputData, setInputSate] = useState('');
    const dispatch = useDispatch();
    const toDoState = useSelector((state) => state.todoReducer);

    const comment = toDoState.list.map((comm) => {
        return (
            <div key={comm.id} className='card'>
                <button className='del-btn' onClick={() => {
                    dispatch(removeToDo(comm.id))
                }}>
                    X
                </button>
                {comm.data}
            </div>
        )
    });

    return (
        <>
            <div className='container'>
                <div className='main'>
                    <h3 className='heading'>
                        ToDo List
                    </h3>
                    <div className='inner'>
                        <input type='text' placeholder='Enter your list' className='inp'
                            value={inputData}
                            onChange={(event) => setInputSate(event.target.value)} />
                        <button className='btn'
                            onClick={() => {
                                dispatch(addToDo(inputData))
                                setInputSate('')
                            }}>
                            +
                        </button>
                    </div>
                    {comment}
                </div>
            </div>
        </>
    )
}

export default Main;
