import React from 'react'
import Loaders from "./loader1.gif"
const Loader = () => {
  return (
    <div style={{marginTop:"5rem"}}>
        {/* <Loaders/> */}
        <img src={Loaders} alt="Loading..." height={"100px"}/>
    </div>
  )
}

export default Loader