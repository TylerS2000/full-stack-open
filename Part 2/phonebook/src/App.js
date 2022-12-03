import { useState, useEffect } from 'react'
import Filter from './Filter'
import Form from './Form'
import Numbers from './Numbers'
import axios from 'axios'
import backend from './backend'
import './App.css' 
const App = () => {
  
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const[newNumber,setNewNumber] =useState('')
  const[filter,setFilter]=useState('')
  const[message, setMessage]=useState('')

  useEffect(()=>{
    backend
    .getAll()
    .then(response=>setPersons(response.data))
 
  },[persons])
 
function handleTextChange(event){
  setNewName(event.target.value)
}

function submitName(event){
  event.preventDefault()

  for(let i = 0; i<persons.length; i++){
    
    if(persons[i].name === newName){
      if (window.confirm(`${persons[i].name} is already in your phone book. Would you like to replace their number`)){
        backend.update(persons[i].id,{...persons[i], number:newNumber})
        .catch(res=>setMessage(`Name is no longer in phone book`))
        setMessage(`${persons[i].name}'s number has been modified`);
        setTimeout(
          ()=>{setMessage(null)},2000
        )
      }
      return
    }
    
  }
      backend.create( {name:newName,number:newNumber})
      .then(response=>console.log(response))
      setMessage(`${newName}'s number has been added`);
        setTimeout(
          ()=>{setMessage(null)},2000
        )
      
    
      return
    
  

  
}
function handleNumberChange(event){ setNewNumber(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <div className='message'>{message}</div>
      <Filter setFilter={setFilter} filter={filter}/>
      <Form newName={newName} handleTextChange={handleTextChange} newNumber={newNumber} handleNumberChange={handleNumberChange} submitName={submitName}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter} remove={backend.remove}/>
    </div>
  )
}

export default App