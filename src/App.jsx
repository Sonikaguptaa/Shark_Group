
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
      <select>
        {subjects.map((sub)=>{
          
          return(<option key={sub}onClick={(e)=>{
            console.log(e.target.value)
            dispatch(getData(e.target.value))
          }}>{sub}</option>)
        })}
      </select>
    </>
  )
}

export default App
