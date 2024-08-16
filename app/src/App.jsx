import { useState } from 'react'
import { useEffect } from 'react';


// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
export const BASE_URL="http://localhost:9000"

import './App.css'
import SearchResult from './components/SearchResult';

function App() {
const [filteredData,setFilteredData] = useState(null);
const [data,setData]=useState(null);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);
const [selectedBtn,setSelectedBtn] = useState("all");

useEffect(() => {
  const fetchFoodData =async ()=>{
    setLoading(true)
    try {
      const response = await fetch(BASE_URL)
      const json =await response.json();
      setData(json)
      setFilteredData(json)
      setLoading(false);
    } catch (error) {
      setError("Unable to fetch data")
    }
  }
  fetchFoodData();
  
}, []);
// console.log(data)
const searchFood = (e) => {
  const searchValue = e.target.value
  console.log(searchValue)
  if(searchValue === ""){
    setFilteredData(null)
  }
  const filter = data?.filter((food) => 
    food.name.toLowerCase().includes(searchValue.toLowerCase())
    )
  setFilteredData(filter)
}
const filterFood =(type)=>{
  if(type==="all"){
    setFilteredData(data)
    setSelectedBtn("all")
    return
  }
  const filter =data?.filter((food)=>
  food.type.toLowerCase().includes(type.toLowerCase())
  )
  setFilteredData(filter)
  setSelectedBtn(type)
}
const filterBtns =[
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  },
  {
    name:"Midnight",
    type:"midnight"
  }
]

if(error) return <div>{error}</div>
if(loading) return <div className='text-white'>Loading...</div>
  return (
    <>
      <div className='bg-[#323334]'>
        <div className="navbar flex justify-between items-center py-15 p-[5vw] ">
          <div className="logo">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="search">
            <input onChange={searchFood} className='border-red-700 border-[1px] rounded-md p-1 bg-transparent text-white' placeholder="Search Food..." />
          </div>
        </div>
        <div className='filterContainer space-x-5 flex items-center justify-center py-5 text-white max-sm:space-x-1 max-sm:grid-cols-2 max-sm:grid max-sm:space-y-2 ' >
          
          {
            filterBtns.map((value)=>(
              <button
              key={value.name}
              onClick={() => filterFood(value.type)}
              className={`px-2 rounded-[5px] ${selectedBtn === value.type ? 'bg-green-600' : 'bg-red-500'}`}
            >
              {value.name}
            </button>
            
            ))
          }
          {/* <button onClick={() => {
            filterFood("all")
          }
          } className='bg-red-500 px-2 rounded-[5px]'>All</button>
          <button onClick={() => {
            filterFood("breakfast")
          }
          } className='bg-red-500 px-2 rounded-[5px]'>Breakfast</button>
          <button onClick={() => {
            filterFood("lunch")
          }
          } className='bg-red-500 px-2 rounded-[5px]'>Lunch</button>
          <button onClick={() => {
            filterFood("dinner")
          }
          } className='bg-red-500 px-2 rounded-[5px]'>Dinner</button> */}
        </div>
        </div>
        <SearchResult data={filteredData}/>
        
        
     
    </>
  )
}

export default App
