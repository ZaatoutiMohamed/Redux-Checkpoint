import React, {useState} from 'react';
import { useSelector } from "react-redux";
import Task from "./Task";
import {Button,Navbar} from 'react-bootstrap';



const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
    const [test, setTest] = useState(1);
  return (
    <div>
    <Navbar bg="dark" expand="lg">
      <Button variant="secondary" onClick={() => setTest(1)}>All</Button>
      <Button variant="secondary" onClick={() => setTest(2)}>Done</Button>
      <Button variant="secondary" onClick={() => setTest(3)}>Not Done</Button>
    </Navbar>
     
      {test == 2
        ? tasks.filter((el) => el.isDone == true).map((el) => <Task el={el} />)
        : test == 3
        ? tasks.filter((el) => el.isDone == false).map((el) => <Task el={el} />)
        : tasks.map((el) => <Task el={el} />)}
    </div>
  );
};
export default ListTask;
