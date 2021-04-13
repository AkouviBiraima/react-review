import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [person, setPerson] = useState({
    firstName:'',
    lastName: '',
  });
  const [allFolks, setAllFolks] = useState([])

  function handleInput(name, value){
    setPerson({...person, [name]: value})
  }

  function handleSubmit(event){
    event.preventDefault()
    setAllFolks([...allFolks], person)
    setPerson({firstName: "", lastName:""})
  }

  return (
    <div>
    <form>
    <input type= "text" name="fname" placeholder="First Name" value={person.firstName} onChange={(event)=>handleInput('firstName', event.target.value)}/>
    <input type= "text"  name="lname" placeholder="Last Name" value={person.lastName} onChange={(event)=>handleInput('lastName', event.target.value)}/>
    <input type="submit" onClick={(event)=>handleSubmit(event)}/>
    </form>
    <ul>
    {allFolks.map((t) => {
    <li>{t.firstName} {t.lastName} </li>
    })}
    </ul>
    </div>
  );
}
