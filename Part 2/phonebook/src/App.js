import { useState, useEffect } from 'react'
import Filter from './Filter'
import Form from './Form'
import Numbers from './Numbers'
import axios from 'axios'
const App = () => {
  
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const[newNumber,setNewNumber] =useState('')
  const[filter,setFilter]=useState('')

  useEffect(()=>{axios('http://localhost:3001/persons')
  .then(response=>console.log(response.json())
 
}
    ,[persons]
  )
function handleTextChange(event){
  setNewName(event.target.value)
}

function submitName(event){
  event.preventDefault()
  for(let i = 0; i<persons.length; i++){
    if(persons[i].name === newName){
      alert(`${newName} is already in your phonebook`)
      return
    }
  }

  setPersons(x=>{
    return([...x,{name:newName, number:newNumber}])
  })
}
function handleNumberChange(event){ setNewNumber(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} filter={filter}/>
      <Form newName={newName} handleTextChange={handleTextChange} newNumber={newNumber} handleNumberChange={handleNumberChange} submitName={submitName}/>
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter}/>
    </div>
  )
}

export default App