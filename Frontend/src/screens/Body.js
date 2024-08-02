import React from 'react'
import Carousel from '../components/Carousel'
import FoodItems from '../components/FoodItems'
import Card from '../components/Card'
import "./body.css"

function Body() {
  return (
    <div>
      <Carousel />
      <div className="flex box-border w-full overflow-scroll">
      {Array.from(Array(9), (e, i) => {
        return (
          <div className="px-7 py-6" key={i + 1}><Card /></div>
        )
      })
      }
      </div>
      {/* {<div className="flex box-border w-full">
  <div className=" grid-container overflow-x-auto grid " >
    {Array.from(Array(9), (e, i) => (
      <div className="px-7 py-6" key={i + 1}><Card /></div>
    ))} */}


  {/* </div>
</div>} */}

      <FoodItems />
    </div>
  )
}
export default Body
