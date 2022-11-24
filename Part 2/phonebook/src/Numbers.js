export default function Numbers({persons, filter}){
    function filterNames (){
        return persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase()))
      }
    let filteredNames =  filterNames()
    function renderNames(){
        return filteredNames.map(person=><p key={person.name}>{person.name}:{person.number}</p>)
      }
      let names = renderNames()
  return( <div>{names}</div>)
}