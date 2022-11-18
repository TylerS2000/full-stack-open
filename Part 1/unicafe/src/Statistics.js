import StatisticLine from "./StatisticLine"
export default function Statistics(props){
    return(
        <div>
    
      <StatisticLine name="Good" value={props.good}/>
      
      <StatisticLine name="Neutral" value={props.neutral}/>
      
      <StatisticLine name="Bad" value={props.bad}/>
    
      <StatisticLine name="Total" value={props.total}/>
      
      <StatisticLine name="Percent Positive" value={props.good*100/props.total}/>
      
      <StatisticLine name="Average Score" value={(props.good*1+props.bad*-1)/props.total}/>
      </div>
    )
}