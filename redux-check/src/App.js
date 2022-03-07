import './App.css';
import ListTask from "./Component/ListTask";
import AddTask from "./Component/AddTask";
import {Navbar,Container} from "react-bootstrap"


function App() {
  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">TO DO LIST REDUX</Navbar.Brand>
  </Container>
</Navbar>
    <div className = 'AddTask'>
      <AddTask/>
     </div> 
    
    <div className = "ListTask">
       <ListTask/>
    </div>
    
     
    </div>
  );
}

export default App;
