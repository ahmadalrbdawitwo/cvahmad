import React, { useState } from 'react'
import { GitHub } from '@mui/icons-material'



function Myproject() {
    const [dataproject , setdataproject ] = useState([
        {
            id:6, 

            img:'6.jpg',
        title:'Multi-vendor store',
        describe:'Programming and designing a multi-vendor store to see the source code on git hub', 
        btn:"GitHub",
        btnto:'',
        type:[
            "Tailwind", 
            'Reactjs' , 

        ]     
    },
        {img:'1.jpg',
        id:1, 

        title:' Prestige Media',
        describe:'Business card design for Prestige Media', 
    
        type:[
            "Photoshop", 

        ]     
    },
        {img:'2.jpg',
        id:2, 

        title:'Al-Arands',
        describe:'Logo design for Al-Arands Shipping, Transit and Customs Clearance Company', 
        type:[
            "Logo Design", 
            "illustrator"

        ]    
    },
     
    {img:'3.jpg',
    id:3, 

    title:'Offices and Engineering Companies Authority',
    describe:'Specialized in building contracts and building designs', 
    type:[
        "Logo Design", 
        'Photoshop' , 
        "3D max"

    ]    
},  {img:'4.jpg',
id:4, 

title:'family bakeries',
describe:'Logo design for family bakeries and bakeries', 
type:[
    "Logo Design", 
    'Photoshop' , 

]    
},  {img:'5.jpg',
id:5, 

title:'Al-Shallal Building Maintenance Company',
describe:'Business card design for Al Shallal Company', 
type:[
    "Photoshop", 

]    
},  
    ])



    return (
    <div className=' mx-10 py-10 grid grid-cols-1  gap-5 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4'>
        {
            dataproject.map((item)=>(
                <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={item.img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
{
    item.describe
}    </p>
{
    item.btn === "GitHub" ? <button type="button" className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
    focus:ring-gray-300 font-medium rounded-full text-sm px-5 mt-3 py-2.5 mr-2     `}>{item.btn} <GitHub/></button> : ""
}

  </div>
  <div className="px-6 pt-4 pb-2">
    {
        item.type.map((index)=> (
            <>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{index}</span>

            </>
        ))
    }
  </div>
</div>
            ))
        } 



    </div>
  )
}

export default Myproject