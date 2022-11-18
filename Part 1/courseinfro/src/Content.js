import Part from "./Part"
export default function Content(props){
    const parts = props.parts;
    return(
        <div>
            <Part exercises={parts[0].exercises} part={parts[0].name}/>
            <Part exercises={parts[1].exercises} part={parts[1].name}/>
            <Part exercises={parts[2].exercises} part={parts[2].name}/>
        </div>
    )
}
