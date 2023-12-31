import React, { useEffect, useState } from 'react'

const useMetrices = () => {
  const [metricesData, setMetricesData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous request to fetch data
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setMetricesData(metricesData)
          setLoading(false)
      },300)
        
      } catch (error) {
        console.error('Error fetching mock user data', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return { metricesData, loading };

}

export default useMetrices