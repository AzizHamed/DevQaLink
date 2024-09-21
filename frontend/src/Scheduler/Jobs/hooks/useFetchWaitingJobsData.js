import React, { useState } from 'react'

const useFetchWaitingJobsData = (props) => {

  const [data, setData] = useState(null); 
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null); 
  const [isLoading, setisLoading] = useState(false)

  const fetchWaitingJobsData = async () => {

    setisLoading(true)
      const response = await fetch('https://devqalink.onrender.com/jobs/waitingJobs/allWaitingJobs')
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
    return { data, status, error,isLoading, fetchWaitingJobsData };
}

export default useFetchWaitingJobsData




