import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import './index.css'

function App() {
  const [data, setData]=useState(null)
  const [loaidng, setLoading]=useState(false)
  const [showModal, setModal] =useState(false)
  function handleToggle(){
    setModal(!showModal)
  }

  useEffect(()=>{
    async function fetchApiData(){
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY
      const url='https://api.nasa.gov/planetary/apod' + 
      `?api_key=${NASA_KEY}`

      //fetch cache to localStore 
      const today=(new Date()).toDateString()
      const localKey=`NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData=JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetches from cache today')
        return

      }
      localStorage.clear()

    //block of possabilite of erros
      try {
        const res= await fetch(url)
        const apiData= await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData)) // save today's data
        setData(apiData)
        console.log('fetches from API today')
      } catch (err) {
        console.log(err.message)
        
      }
    }
    fetchApiData()
  }, [])

  return (
    <>
    {(data ? (<Main data={data}/>):(
      <div className="loadingState">
        <i className="fa-solid fa-gear"></i>
      </div>
    ))}
    {
      //condition if my sidebar is true it will be show up if not wont be show up 
      showModal && (
      <SideBar handleToggle={handleToggle} data={data}/>
      )
    }
     {data && (<Footer handleToggle={handleToggle} data={data} />)}
    </>
 
  )
  
}

export default App
