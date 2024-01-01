import React, { useEffect, useState } from 'react'
import recentActivityData from '../data/recentsData';

const useActivity = () => {
  const [recentActivity, setRecentActivity] = useState([{
    timestamp: "",
    user: "",
    activityType: "",
    activityDetails: {
      activityName: "",
      description: "",
      link: ""
    }
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous request to fetch data
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setRecentActivity(recentActivityData)
          setLoading(false)
      },300)
        
      } catch (error) {
        console.error('Error fetching mock recents data', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return { recentActivity, loading };
}

export default useActivity