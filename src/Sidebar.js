import React from 'react'
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { BrowserRouter,Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  

  const [bar , setbar] = useState("-translate-x-full"); 

       const handle = ()=> { 
      if(bar === "translate-x-0"){
        setbar("-translate-x-full")

      }else if( bar === "-translate-x-full"){ 
        setbar("translate-x-0")

      }
    }
    function handleLinkClick() {
    }
    
        const [sidebar , setsidebar] =useState([
            {
              id:1,
                name:"Ahmad",
                diraction:'/cv/ahmad',
                icon:<PersonIcon/>,
            },
            {
              id:2,

                name:"about me",
                diraction:'/cv/about',
                icon:<PermContactCalendarIcon/>,

            },
            {
              id:3,

                name:"My Projects", 
                diraction:"/cv/project", 
                icon:<CollectionsBookmarkIcon/>,

            }
    
        ]);
      
  return (
    <div className='bg-slate-50'>
    
    
<button onClick={handle}  data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" btn inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className={`  fixed shadow-lg top-0 left-0 z-40 w-64 h-screen transition-transform  ${bar}   sm:translate-x-0`} aria-label="Sidebar">



<div className='w-full  bg-hero-pattern bg-cover '> 



<div className='w-1/2 h-24 relative   m-auto  pt-10 '> 

<img className='rounded-full absolute top-8 border-2 border-white' src='/media/ahmad.jpg' alt='as'></img>
</div>

        </div> 
   
   <div className="h-full  px-3 pt-20 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      
      
   <p className="mb-6  items-center font-bold  text-danger dark:text-danger-500">
            ahmadalrbdawi6@gmail.com
        </p>
      <ul className="space-y-2 font-medium">
       {sidebar.map((item)=>{ 
        return(<li key={item.id}>
        <a href={item.diraction}  >
<div className="text-gray-500 flex items-center p-2   dark:text-white hover:text-yellow-400 dark:hover:bg-gray-700 group">
{
        item.icon
       }
               <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
        
  </div>          </a>
           
         </li>)
       })} 


         
       
      </ul>
<div className='mt-10'>
      <div>

      <a
  type="button"
  href='https://www.facebook.com/ahmad.alrbdawi.39?mibextid=LQQJ4d'
  data-te-ripple-init
  data-te-ripple-color="light"
  className="cursor-pointer mb-2 inline-block rounded bg-blue-700 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</a>
</div>
<div>

<a
  href='https://www.linkedin.com/in/ahmad-alrbdawi-13a1b424b'
  data-te-ripple-init
  data-te-ripple-color="light"
  className="cursor-pointer mb-2 inline-block rounded bg-blue-700 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   >
 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
</a>
</div>
<div>

<a
  href='https://github.com/ahmadalrbdawitwo'
  data-te-ripple-init
  data-te-ripple-color="light"
  className="cursor-pointer inline-block m-auto rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
   >
    <div className='h-5 w-4'>
    <GitHubIcon className=''></GitHubIcon> 

    </div>

</a>
</div>
</div>
   </div>
</aside>
    </div>


  )
}

export default Sidebar