export default function Total(props){
    const parts = props.parts
     return(
         <p>Number of Exercises {parts.reduce((accumulator,part)=>accumulator+part.exercises,0)}</p>
     )
 }