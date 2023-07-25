<<<<<<< HEAD
=======
// import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> f52c1c15fe13c58dbfb68c87fa9aa29b3042209a

import { useDispatch,useSelector } from 'react-redux';
import { getData } from './redux/BookData';
getData
function App() {
  const subjects = ['arts','animals','fiction','science&mathematics','history','health']
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <>
<<<<<<< HEAD
      <select>
=======
      <Form.Select aria-label='Default select example'>
>>>>>>> f52c1c15fe13c58dbfb68c87fa9aa29b3042209a
        {subjects.map((sub)=>{
          return(<option key={sub}onClick={(e)=>{
            console.log(e.target.value)
            dispatch(getData(e.target.value))
          }}>{sub}</option>)
        })}
      </Form.Select>
    </>
  )
}

export default App
