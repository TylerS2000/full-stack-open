import Part from "./Part"
export default function Content(props){
    const parts = props.parts;

    function diplayParts(){
       return parts.map(part=>{
        return<Part exercises={part.exercises} part={part.name}/>
        })
    }
    let partsMap=diplayParts()
    
    return(
        <div>
            {partsMap}
        </div>
    )
}
