import axios from 'axios'
import React from 'react';



function App() {
  let [search,setSearch]= React.useState('');
  let[data,setData]=React.useState('');
  React.useEffect(()=>{axios.get(`https://restcountries.com/v2/name/${search}`)
    .then(response=>setData(response.data.map(country=>{return {...country,show:false}})))},[search]
  )

  function handleChange(event){
    setSearch(event.target.value)
  }
function showCountry(selectedCountry){
setData(data=>{return data.map(country=>{console.log(selectedCountry.name===country.name); return country.name===selectedCountry.name?{...country, show:true}:country}) })
console.log(data)

}
  function renderData(){
    if (data.length<1){return <p>No Match</p>}
    else if(data.length>10){return <p>too many results</p>}
    else if(data.length===1){
      return(<div><h1>{data[0].name}</h1>
      <p>Capital:{data[0].capital}</p>
      <p>Area:{data[0].area}</p>
      <h2>Languages:</h2>
      <ul>
        {data[0].languages.map(language=><li>{language.name}</li>)}
      </ul>
       <img src={data[0].flag} style={{width:"30%"}}/>
       </div>)
    }
    return data.map(country=><div>{country.name}{country.show?<div><img src={country.flag} style={{width:"30%"}}/> <h2>Languages:</h2> <ul>
    {country.languages.map(language=><li>{language.name}</li>)}
  </ul></div>:<p></p>}<button onClick={()=>showCountry(country)}>show</button></div>)
  }

 let render = renderData()
  return (
  <div>
  Find Countries:
 <input value={search} onChange={handleChange} />
{render}
 </div>
  );
}

export default App;

