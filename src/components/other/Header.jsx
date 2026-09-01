
import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
    
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium text-white '>Hello <br />
                <span className='text-3xl font-semibold text-white'>username👋</span>
            </h1>
            {/* Typos fixed here: rounded-sm instead of rounded-small */}
            <button className='bg-red-600 text-white font-medium px-5 py-2 rounded-sm text-lg' onClick={logOutUser}>
                Log Out
            </button>
        </div>
    )
}

export default Header
 