import React from 'react'
import PrimaryButton from "../PrimaryButton";
const Card =  ({name,age,city,profilePhoto,profession}) => {
  return (
    <div className=" card-box ">
        <img
        className="card-img "
        src={profilePhoto}
      /> 
      <h3>{name} </h3>
      <h4 className="text-primary">{profession}</h4>
      <h5>{age} , {city}</h5> 
      <PrimaryButton >Add friend</PrimaryButton>
    </div>
  )
}

export default Card
