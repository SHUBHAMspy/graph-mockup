import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../../component/common/button/Button';
import { ShareIcon, TrashIcon } from '@heroicons/react/24/outline';


const DetailsPage = ({}) => {
  // const [graph, setGraph] = useState<any>(null);
  const {state:graph} = useLocation()
  

  // Placeholder for delete graph function
  const deleteGraph = () => {
    // Replace with your API call to delete the graph
    console.log('Delete graph function');
  };

  if (!graph) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 sm:p-10 space-y-6 w-full" >
      <h1 className='text-4xl font-bold'> Graph Details</h1>
      <div className="flex flex-col  justify-between space-y-6 md:space-y-0 md:flex-row ">
        <div className="mr-6">
          <h1 className="text-3xl font-semibold">{graph.title}</h1>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 -mb-3">
          <Button text={"Share"} icon={<ShareIcon className="flex-shrink-0 h-6 w-6 text-white"/>}/>
          <Button 
            text={"Delete"} 
            icon={<TrashIcon className="flex-shrink-0 h-6 w-6 text-white"/>}
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">{graph.title}</h1>
        <p className="text-gray-600 mb-4">{graph.description}</p>
        <p className="text-sm text-gray-500 mb-4">Date Created: {graph.dateCreated}</p>

        {/* Button to take user to the graph */}
        <button className="bg-blue-500 text-white px-4 py-2 mb-4">Go to Graph</button>

        {/* List of papers shown in the graph */}
        <ul>
          {graph.papers.map((paper: any) => (
            <li key={paper.id}>{paper.title}</li>
          ))}
        </ul>

        {/* Buttons for editing, sharing, and deleting the graph */}
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2" onClick={() => console.log('Edit graph')}>
            Edit
          </button>
          
        </div>

      </div>
    </div>
  );

}

export default DetailsPage