import { useState } from 'react'
import Statistics from './Statistics.js'
import Button from './Button.js'
const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0)
  let [neutral, setNeutral] = useState(0)
  let [bad, setBad] = useState(0)
  let total = bad +good+neutral


  return (
    <div>
      <h1>Please Rate Us</h1>
     <Button onClick={setGood} type={"Good"}/>
     <Button onClick={setNeutral} type={"Neutral"}/>
     <Button onClick={setBad} type={"Bad"}/>
     {(good||neutral||bad>0)&&<Statistics good = {good} bad = {bad} neutral={neutral}  total = {total}/>}
    </div>
  )
}

export default App