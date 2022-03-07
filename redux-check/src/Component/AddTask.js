import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../Redux/Action';
import {Navbar,Button,FormControl} from "react-bootstrap";
const AddTask = () => {
    const [inputText,setInputText] = useState("");
    const dispatch = useDispatch();
    return (
        <div className = "AddTask">
        <Navbar bg="dark" expand="lg">
            <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange = { (e) => setInputText(e.target.value)} />
    
         <Button variant="secondary" onClick = {()=>dispatch(addTask(inputText))} >Add Task</Button>
        </Navbar>


        </div>
    );
}
export default AddTask;