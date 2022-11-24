import { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import Numbers from './Numbers'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const[newNumber,setNewNumber] =useState('')
  const[filter,setFilter]=useState('')
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