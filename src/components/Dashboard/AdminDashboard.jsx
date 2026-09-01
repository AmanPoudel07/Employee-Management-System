import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7 bg-[#1c1c1c]'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
            
        </div>
    )
}

export default AdminDashboard