import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

   const getData =async()=>{
      try {
        const response= await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setData(data)
        
      } catch (error) {
        console.log(error)
      }
   }
getData()
  return (
    <>
      <h1>Algolia Search</h1>
      <div>
        <label htmlFor="">Search here</label>
        <input type="text" placeholder='search here' />
      </div>
      <div>
        <h1>All Product</h1>
        <div>
          {data?.map((el)=> <div>
            <p>{el.title}</p>
            <img src={el.image} height={"50px"} width={"50px"} alt="" />
          </div> )}
        </div>
      </div>
    </>
  )
}

export default App
