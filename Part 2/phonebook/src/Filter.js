export default function Filter(props){
    function handleFilterChange(event){
        props.setFilter(event.target.value)
      }
return(<div>Filter:<input value={props.filter} onChange={handleFilterChange}/>
</div>)
}