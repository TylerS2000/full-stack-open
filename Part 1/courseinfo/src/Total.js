export default function Total(props){
   const parts = props.parts
    return(
        <p>Number of Exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
}