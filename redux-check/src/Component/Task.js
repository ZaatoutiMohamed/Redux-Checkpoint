import React from 'react';
import { deleteTask } from "../Redux/Action";
import { reverseDone } from "../Redux/Action";
import { useDispatch} from 'react-redux';
import EditTask from "./EditTask";
import {Button,Navbar} from 'react-bootstrap'


const Task = ({el}) => {
    const dispatch = useDispatch();
    return (
    
        <div>
            <h2 className={el.isDone && " lineThrough"}> 
                {el.description}
            </h2>
            <Navbar bg="dark" expand="lg">
            <Button variant="danger" onClick={() => dispatch(deleteTask(el.id))}>Delete
            </Button>
            <Button variant="secondary" onClick={() => dispatch(reverseDone(el.id))}>Done
            </Button>
      <EditTask el={el} />
      </Navbar>
        </div>
    );
};
export default Task;


