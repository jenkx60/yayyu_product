import React from 'react'
import { BounceLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <BounceLoader />
    </div>
  )
}

export default Loader;