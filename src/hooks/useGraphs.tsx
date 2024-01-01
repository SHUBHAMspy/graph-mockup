import React, { useEffect, useState } from 'react'
import savedGraphs, { Graph } from '../data/graphData';

const useGraphs = () => {
  const [graphData, setGraphData] = useState([{
    id: '',
    title: "",
    dateCreated: "",
    description: "",
    thumbnail: ""
  }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous request to fetch data
    const fetchData = async () => {
      try {
        setTimeout(() => {
          setGraphData(savedGraphs)
          setLoading(false)
      },300)
        
      } catch (error) {
        console.error('Error fetching mock user data', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return { graphData, loading };


}

export default useGraphs