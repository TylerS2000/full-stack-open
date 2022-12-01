export default function Numbers({persons, filter,remove}){
    function filterNames (){
       return persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase()))
      }
    let filteredNames =  filterNames()
    function renderNames(){
        return filteredNames.map(person=><div>
          <p key={person.id}>{person.name}:{person.number}</p>
        <button onClick={()=>remove(person.id)}>Delete</button>
        </div>)
      }
      let names = renderNames()
  return( <div>{names}</div>)
}