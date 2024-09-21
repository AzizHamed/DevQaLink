import React, { useState } from 'react'

const useAddReadyJobHook = () => {
  const [data, setData] = useState(null); 
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null); 
  const [isLoading, setisLoading] = useState(false)

  const PostReadyJobData = async (job) => {

    setisLoading(true)
       await fetch(`https://devqalink.onrender.com/jobs/readyJobs/addJob`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job), // assuming jobId is enough to insert it
    })
      .then(async (res) => {
        setStatus(res.status); 
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
        setData(err);
      })
      .finally(()=> {
        setisLoading(false)
      })
      
     
  
      
    }
    return { data, status, error,isLoading, PostReadyJobData };
}

export default useAddReadyJobHook
