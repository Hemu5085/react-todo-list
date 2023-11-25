"use client"
import React, { useState } from 'react'

const page = () => {
  const[title , settitle] = useState("")
  const[desc , setdesc] = useState("")
  const[mainTask , setMainTask] = useState([])

  const submitHandler = (e)=>{
  e.preventDefault()
 setMainTask([...mainTask , {title , desc}])
  settitle("")
  setdesc("")
  console.log(mainTask)
  }

  const deleteHandler = (i) => {
           let copyTask = [...mainTask]
           copyTask.splice(i , 1)
           setMainTask(copyTask)
  }
   let renderTask = <marquee behavior="alternate" direction="ltr"  scrollamount="10"> <button  className='text-white border-whitesmoke-1000 border-3 bg-black rounded m-3 p-3'>No Task Available  </button> </marquee>

 if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return (
       <li key= {i} className='flex items-center justify-between mb-8'> <div className='flex justify-between mb-5 w-2/3 '>
      <h5 className='text-xl font-medium'>{t.title}</h5>
      <h6 className='text-xl font-medium'>{t.desc}</h6>
    </div>
   <button
   onClick={() => {
    deleteHandler(i)
   }}
   className='bg-pink-800 font-bold text-white rounded m-2 p-2 '>Delete</button>

  </li>
    );
});
 }

  return (
    <>
      <h1 className='bg-blue-300 text-gray-600 p-5 text-3xl font-bold text-center'>Himanshu's Todo list</h1>

      <form onSubmit={submitHandler}>
      <input type='text' className=' bg-green-100 text-2xl border-zinc-800 m-4 px-2 py-2 rounded-xl' placeholder='Enter task here' value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type='text' className=' bg-green-100 text-2xl border-zinc-800 m-4 px-2 py-2 rounded-xl'placeholder='Enter Discription here' value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      
      <button className='bg-red-800 text-white px-2 py-2 text-2xl rounded'>Add Task</button>
      </form>
     <hr/>

<div className='p-1 bg-red-300 text-center  '>
  <ul>
    {renderTask}
  </ul>
</div>
   
</>
 
  )
}

export default page
