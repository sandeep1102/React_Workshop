import React from 'react'

function Hero(props) {
    if(props.heroName === "Loki"){
        throw new Error("Not a hero")
    }
  return (
    <h2>{props.heroName}</h2>
  )
}

export default Hero