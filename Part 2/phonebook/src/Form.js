export default function Form(props){

return(
<form>
        <div>
          name: <input value={props.newName} onChange={props.handleTextChange}/>
          </div>
          <div>number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
       
       
        <div>
          <button type="submit" onClick={props.submitName}>add</button>
        </div>
      </form>
      )
}