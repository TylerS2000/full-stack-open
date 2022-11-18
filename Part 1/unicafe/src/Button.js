export default function Button(props){
    return(
        <button onClick={()=>props.onClick(prev=>prev+=1)}>{props.type}</button>
    )
}