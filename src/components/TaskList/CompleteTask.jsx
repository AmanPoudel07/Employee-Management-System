import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl text-white'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-xs font-semibold px-3 py-1 rounded-lg'>{data.category}</h3>
                <h4 className='text-xs font-medium text-red-100'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-bold tracking-tight text-white'>{data.taskTitle}</h2>
            <p className='text-sm mt-3 text-red-50 leading-releaxed '>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
            </div>
        </div>
  )  
}

export default CompleteTask
