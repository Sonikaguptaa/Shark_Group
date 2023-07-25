// import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const subjects = ['arts','animals','fiction','science&mathematics','history','health']
  async function getData(subject){
    
    
    
    const url = `http://openlibrary.org/subjects/${subject}.json?`;
    
    
   
   try {
     const response = await fetch(url);
     const data = await response.json()
     console.log(data);
   } catch (error) {
     console.error(error);
   }
       
   }

  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <>
      <Form.Select aria-label='Default select example'>
        {subjects.map((sub)=>{
          return(<option key={sub}onClick={(e)=>{
            console.log(e.target.value)
            getData(e.target.value)
          }}>{sub}</option>)
        })}
      </Form.Select>
    </>
  )
}

export default App
