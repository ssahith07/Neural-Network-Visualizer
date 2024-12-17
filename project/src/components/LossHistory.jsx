import React, { useState, useEffect } from 'react'
import { ChartLine } from 'lucide-react'

function LossHistory({lossResponse}) {
    const [lossHistory , setLossHistory] = useState([]);
    useEffect(() =>{
        setLossHistory(lossResponse);
    },[lossResponse])

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl'>
      <div className='flex items-center gap-2 mb-6'>
        <ChartLine className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Loss History</h2>
      </div>
      <div className='mt-6 flex gap-4'>
        <p>{lossHistory}</p>
      </div>
    </div> 
  )
}

export default LossHistory
