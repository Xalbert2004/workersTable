import AddUser from "./AddUser";
import UserList from "./UserList";
import './App.css'
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: Math.random(),
      name: "Arman",
      surname: "Davtyan",
      salary: 200000
    },
    {
      id: Math.random(),
      name: "Emil",
      surname: "Nadaryan",
      salary: 200000
    },    {
      id: Math.random(),
      name: "Artur",
      surname: "Sargsyan",
      salary: 200000
    }
  ])

  const handleSalaryUp = (id)=>{
    let person = users.find((elm) => elm.id === id);
    if(person){
      person.salary += 50000
    }
    setUsers([...users])
  }
  const handleSalaryDown = (id)=> {
    let person = users.find((elm) => elm.id === id);
    if(person && person.salary >= 50000){
      person.salary -= 50000
    }
    setUsers([...users])
  }
  const handleDelete = (id)=>{
    setUsers([...users.filter(elm => elm.id !== id)])
  }

  return (
    <div className="App">
      <UserList
       users={users}
       onDelete = {handleDelete}
       onSalaryUp = {handleSalaryUp}
       onSalaryDown = {handleSalaryDown}
       
       />
      <AddUser />
    </div>
  );
}

export default App;
