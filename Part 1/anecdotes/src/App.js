import { useEffect, useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const votingResults=anecdotes.map(anecdote=>{return{anecdote:anecdote,votes:0}})
  
  const [selected, setSelected] = useState(0)
  let [votingData, setVotingData]=useState(votingResults)
  let [mostVotes, setMostVotes]=useState(votingData[0])
function MostVotes(){
  let most = votingData[0]
  for(let i = 0; i<votingData.length; i++){
if(votingData[i].votes>most.votes){
  most = votingData[i]
}

  }
  setMostVotes(most)
}
useEffect(()=>MostVotes(),[votingData])
console.log(mostVotes);
function handleVote(){
  setVotingData(
    votingData.map(anecdote=>{
      
      if(votingData.indexOf(anecdote)===selected){return{...anecdote,votes:anecdote.votes+=1}}
      else{return anecdote}
    }
      )
  )
}
  return (
    <div>
      {votingData[selected].anecdote}
      <br/>
      Votes:{votingData[selected].votes}
      <br/>
      <button onClick={()=>setSelected(Math.floor(Math.random()*anecdotes.length))}>Next Anecdote</button>
      <button onClick={()=>handleVote()}>Vote</button>
      <h1>Anecdote with the most votes</h1>
      {mostVotes.anecdote}
      Votes:{mostVotes.votes}
    </div>
  )
}

export default App

//{console.log(x.votes++); return prev.indexOf(x)===selected?x:{...x,votes:x.votes++}}))

//<button onClick={
  //()=>setVotingData(prev=>prev.map(x=>{if(prev.indexOf===selected){return({...x,votes:x.votes++})}
//else{return x}}})
 //}>Vote</button>