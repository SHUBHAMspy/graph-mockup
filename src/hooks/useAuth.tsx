import React, { useEffect, useState } from 'react'
import mockUserData from '../data/userData';


const useAuth = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    bio: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous request to fetch data
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setUserData(mockUserData)
          setLoading(false)
      },300)
        
      } catch (error) {
        console.error('Error fetching mock user data', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return { userData, loading };

}

export default useAuth