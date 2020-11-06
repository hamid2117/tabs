import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchData = async ()=>{
    const fetching = await fetch(url)
    const newJobs = await fetching.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return(
      <h1>loading</h1>
    )
  }

const {dates, company , title,duties} = jobs[value]
  return <>
  <section className="section">
    <div className='title'>
      <h2>experience</h2>
    <div className="underline"></div>
    </div>
    <div className="jobs-center">
      {/* btn container*/}
      <div className="btn-container">

      {jobs.map((items, index)=>{// jobs ka data ka number index ha
        return <>
        <button key={items.id} onClick={()=>setValue(index)} className={`job-btn ${index===value && 'active-btn'}`} >
          {items.company}</button></>

})}
</div>
      {/* job info*/}
      <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
       <p className='job-date'>{dates}</p>
       {duties.map(( duty,index)=>{
       return (
       <div className="job-disc"
       key={index}>
         <FaAngleDoubleRight className='job-icon' >
       </FaAngleDoubleRight>
        <p>{duty}</p>
         </div>)
        })}
      </article>

    </div>
    
        
      </section></>

}

export default App
