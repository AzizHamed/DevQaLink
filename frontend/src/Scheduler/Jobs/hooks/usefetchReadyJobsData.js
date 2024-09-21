import React, { useState } from 'react'

const useFetchReadyJobsData = (props) => {

  const [data, setData] = useState(null); 
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null); 
  const [isLoading, setisLoading] = useState(false)

  const fetchReadyJobsData = async () => {

    setisLoading(true)
       await fetch('https://devqalink.onrender.com/jobs/readyJobs/allReadyJobs')
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
    return { data, status, error,isLoading, fetchReadyJobsData };
}

export default useFetchReadyJobsData




