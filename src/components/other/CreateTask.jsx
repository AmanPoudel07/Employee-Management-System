import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }
    return (
         <div className='p-5 bg-[#2b2b2b] mt-7 rounded'>
                <form onSubmit={(e) =>{
                    submitHandler(e)
                }}
                className='flex items-start justify-between gap-10 flex-wrap w-full'>
                    {/* Left Column - 2/5 Width */}
                    <div className='w-2/5'>
                        <div className='mb-4'>
                            <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className='w-full text-sm py-1.5 px-3 rounded-md outline-none bg-transparent 
                                border-[1px] border-gray-600 text-white placeholder:text-gray-400'
                                type="text"
                                placeholder="Make a UI design"
                            />
                        </div>

                        <div className='mb-4'>
                            <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className='w-full text-sm py-1.5 px-3 rounded-md outline-none bg-transparent 
                                border-[1px] border-gray-600 text-gray-300'
                                type="date"
                            />
                        </div>

                        <div className='mb-4'>
                            <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
                            <input
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignTo(e.target.value)
                                }}
                                className='w-full text-sm py-1.5 px-3 rounded-md outline-none bg-transparent 
                                border-[1px] border-gray-600 text-white placeholder:text-gray-400'
                                type="text"
                                placeholder='employee name'
                            />
                        </div>

                        <div className='mb-4'>
                            <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='w-full text-sm py-1.5 px-3 rounded-md outline-none bg-transparent 
                                border-[1px] border-gray-600 text-white placeholder:text-gray-400'
                                type="text"
                                placeholder='design, dev, etc'
                            />
                        </div>
                    </div>

                    {/* Right Column - 2/5 Width */}
                    <div className='w-2/5 flex flex-col items-start'>
                        <div className='w-full mb-4'>
                            <h3 className='text-sm text-gray-300 mb-1 '>Description</h3>
                            <textarea
                                value={taskDescription}
                                onChange={(e) => {
                                    setTaskDescription(e.target.value)
                                }}
                                placeholder='Write a description for the task...'
                                className='w-full h-56 text-sm py-2 px-3 rounded-md outline-none bg-transparent 
                                border-[1px] border-gray-600 text-white '
                                name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <button className='bg-emerald-500 text-white font-semibold w-full text-sm py-3 px-5 
                        rounded-md mt-4 hover:bg-emerald-600 transition-colors'>
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
  )
}
export default CreateTask
