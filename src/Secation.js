import React from 'react'
function Secation() {
  return (
    <div className=' overflow-hidden h-screen  bg-hero-pattern bg-cover w-full'>
      <div> 
        <img className='m-auto rounded-full w-32 mt-8' src='ahmad.jpg'></img>
        
      </div>
      <h1 className='text-6xl mt-10   font-extrabold text-amber-300 '> 
        ahmad alrbdawi
      </h1>
      <p className='text-3xl text-white mb-10 drop-shadow-lg   mt-2'> 
        i am junuer web develobment 
      </p>

      <a href='/about' className="w-40  text-yellow-400 hover:text-white border border-yellow-400  hover:bg-yellow-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">About me </a>
    </div>
  )
}

export default Secation