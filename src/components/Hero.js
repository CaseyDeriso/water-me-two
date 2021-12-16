import React, { useState } from "react";
import background from "../assets/photos/back.jpg";
import { ADD_PLANT } from "../utils/actions";
import { useUserContext } from "../utils/user.context";

function Hero() {
  const [state, dispatch] = useUserContext()

  console.log(state)

  const [ plantName, setPlantName ] = useState('');
  const [ quantity, setQuantity ] = useState(null);
  const [ frequency, setFrequency ] = useState(null); 

  const handleClick = () => {
    const plantData = {plantName, quantity, frequency};
    dispatch({type: ADD_PLANT, plant: plantData})
  }

  return (
    <div className="top" style={{backgroundImage: `url(${background})`}}>
    <div className="jumbotron">
      <div className="title">
        <h1> Water Me!</h1>
        <p>
          Add your plants to your profile page along with the amount
          <br />
          water each pot needs and how often you water it.
        </p>
      </div>
      <div className="add">
        <div className="add__container">
          <input
            type="text"
            placeholder="Plant name."
            className="pName"
            onChange={(e) => setPlantName(e.target.value)} />
          <input
            type="text"
            placeholder="How much water?"
            className="aWater" 
            onChange={(e) => setQuantity(e.target.value)}/>
          <input
            type="text"
            placeholder="How often?"
            className="often" 
            onChange={(e) => setFrequency(e.target.value)}/>
          <button className="add___btn" onClick={handleClick}>
            add
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero;