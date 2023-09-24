import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='absolute top-1/2 left-1/2'>
        <div className="inline-block h-8 w-8  animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
    </div>
  )
}

export default LoadingSpinner