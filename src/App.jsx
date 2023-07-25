import { useEffect, useState } from 'react'


function App() {
  const subjects = ['arts','animals','fiction','science&mathematics','history','health']
  async function getData(subject){
    
    
    
    const url = `http://openlibrary.org/subjects/${subject}.json?`;
    
    
   
   try {
     const response = await fetch(url);
     const data = await response.json()
     console.log(data.works);
   } catch (error) {
     console.error(error);
   }
       
   }

  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <>
      <select o>
        {subjects.map((sub)=>{
          
          return(<option key={sub}onClick={(e)=>{
            console.log(e.target.value)
            getData(e.target.value)
          }}>{sub}</option>)
        })}
      </select>
    </>
  )
}

export default App
