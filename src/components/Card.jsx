import React from 'react'
const Card =  ({name,age,city,profilePhoto,profession}) => {
  return (
    <div className=" card-box">
        <img
        src={profilePhoto}
        className="card-img"
      /> 
      <h3>{name} </h3>
      <h4 className="text-primary">{profession}</h4>
      <h5>{age} , {city}</h5> 
      <button className="">Add friend</button>
    </div>
  )
}

export default Card
