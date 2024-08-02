import React from "react";
import cardPic from "../assets/fresh-food.jpg"
function Card() {
  return (
    <>
      <div className="cardBody max-w-xs h-auto bg-white shadow-md">
        <div className="imgContainer w-full h-48  shadow-md">
          <img src={cardPic} className="max-w-full h-full object-cover w-[100%] " alt="" />
        </div>
        <div className="details">
          <h2 className="title text-center text-2xl font-medium">food title</h2>
          <div className="discription w-full h-16">
            <p className="font-poppins text-sm text-center p-2 box-border">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
              nihil.
            </p>
          </div>
          <div className="selection flex space-x-4  justify-center">
            <select name="" id="" className="border-">
              <option value="">quantity</option>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="" id="">
              <option value="">half</option>
              <option value="">full</option>
            </select>
            <h3 className="price font-Pompiere font-bold">rs 50/-</h3>
          </div>
          <div className="order-div flex justify-center py-2 ">
            <button className="Order-btn rounded bg-orange-400 p-1 px-2 font-poppins">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
