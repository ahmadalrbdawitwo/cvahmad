import React from 'react'
import { useState } from 'react'
function About() {
    const [skills , setskills] = useState([
        {name:"Html", 
        brisnt:"100",
      },
      {name:"Css", 
    brisnt:"100",
  },
      {name:"Java Script", 
      brisnt:"100",
    },
    {name:"React Js", 
    brisnt:"100",
  },
    
       
       
    
      ]);
      const [skillspersonal , setskillspersonal] = useState([
        {name:"web development", 
        brisnt:"95",
      },
      {name:"web design", 
    brisnt:"80",
  },
      {name:"praphic design", 
      brisnt:"45",
    },{
        name:'seo ', 
        brisnt:'60'
    },
    {name:"Photoshop", 
        brisnt:"50",
      },
      ]);
  return (
    <div className='font-sans pb-40'>
<div className="  container my-24 mx-auto md:px-6">
  <section className="m-3 sm:m-0 mb-32 text-center lg:text-left">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <img src="ahmad1.jpg" alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="display-5 mb-6 text-4xl font-bold text-primary dark:text-primary-400">
            All my skills
            </h2>
            <div className='flex'>
              <div className='basis-2/5 '>
              <ul className="space-y-4 my-5 text-left text-gray-500 dark:text-gray-400">
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Html</span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Css </span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>JavaScript</span>

    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>BootStrap </span>
    </li>
</ul>
              </div>
              <div className='basis-2/5'> 
              <ul className="space-y-4 my-5 text-left text-gray-500 dark:text-gray-400">
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Tailwind Css</span>
    </li>
 
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>React Js</span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>React redux</span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>React Router</span>
    </li>
</ul>
              </div>

              <div className='basis-2/5'>
              <ul className="space-y-4 my-5 text-left text-gray-500 dark:text-gray-400">
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>Photoshop</span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>illustrator </span>
    </li>
    <li className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
        <span>CorilDro</span>
    </li>
</ul>
              </div>
       
</div>



            <div className="grid md:grid-cols-3 lg:gap-x-12">
              <div className="mb-12 text-center md:mb-0">
                <h2 className="mb-4 text-3xl font-bold text-primary dark:text-primary-400">
                  3.2
                </h2>
                <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Cumulative average
                </h5>
              </div>

              <div className="mb-12 text-center md:mb-0">
                <h2 className="mb-4 text-3xl font-bold text-primary dark:text-primary-400">
                  70%
                </h2>
                <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                National Exam
                </h5>
              </div>

              <div className=" text-center">
                <h2 className="mb-4 text-3xl font-bold text-primary dark:text-primary-400">
                  2730
                </h2>
                <h5 className="mb-0 text-lg font-medium text-neutral-500 dark:text-neutral-300">
                Coffee Consumed
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

          <div className=" inline sm:flex  justify-around ">

<div className=" basis-2/5 m-3 sm:m-0  shadow-2xl bg-white  pt-10 pb-5 px-4">
    

    <h2 className="display-5 mb-6 text-4xl font-bold text-primary dark:text-primary-400">
            coding skills
            </h2>
    {skills.map((item)=> { 
        return(
            <div className="mt-3 ">
            <h3 className='flex justify-between'><div className=''>{item.name} </div>  <div className=''>{item.brisnt}%</div> </h3>
        
            <div className="w-full h-4 p-0.5 rounded-lg border-blue-500  border "><div style={{width:`${item.brisnt}%`}} className='rounded-lg  bg-blue-500  h-full'></div></div>
        </div>
        )
    })}
 




</div>

<div className=" m-3 sm:m-0  basis-2/5 shadow-2xl bg-white pt-10 pb-5 px-4 ">
<h2 className="display-5 mb-6 text-4xl font-bold text-primary dark:text-primary-400">
            personal skills
            </h2>
{skillspersonal.map((item)=> { 
        return(
            <div className="mt-3">
       
            <h3 className='flex justify-between'><div className=''>{item.name} </div>  <div className=''>{item.brisnt}%</div> </h3>
        
            <div className="w-full h-4 p-0.5 rounded-lg border-blue-500  border "><div style={{width:`${item.brisnt}%`}} className='rounded-lg  bg-blue-500  h-full'></div></div>
        </div>
        )
    })}
 
</div>





</div>
    </div>
  )
}

export default About