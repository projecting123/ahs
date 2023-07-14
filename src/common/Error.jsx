import React from 'react'

const Error = () => {
  return (
    <>
        <div className='flex flex-col justify-center min-h-screen items-center bg-gray-500'>
            <p className='text-4xl'>404</p>
            <h1 className='text-2xl'>Page not found !!!</h1>
            <p className='font-mono mt-4'>Please check your url first</p>
        </div>
    </>
  )
}

export default Error