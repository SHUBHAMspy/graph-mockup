import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Button from '../../component/common/button/Button';
import { ArrowUpRightIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline';


const DetailsPage = ({}) => {
  // const [graph, setGraph] = useState<any>(null);
  const {state:graph} = useLocation()
  
  const deleteGraph = () => {

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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <p className="text-sm text-gray-500 mb-4">Date Created: {graph.dateCreated}</p>
          <p className="text-md text-gray-600 mb-4">{graph.description}</p>
          <p></p>
          {/* Button to take user to the graph */}
          <Button text='Go to Graph' icon={<ArrowUpRightIcon className="flex-shrink-0 h-6 w-6 text-white"/>} />

          {/* List of papers shown in the graph */}
          <ul className='gap-6'>
            {graph.papers.map((paper: any) => (
              <li 
                key={paper.id}
                className='mt-4 flex flex-row justify-between w-full cursor-pointer bg-white p-4 shadow-2xl rounded-xl'
              >
                {paper.title}
                <div>
                  <HeartIcon className='h-6 w-6'/>
                </div>
              </li>
            ))}
          </ul>

          {/* Buttons for editing, sharing, and deleting the graph */}
          

        </div>
        <div className='rounded-xl w-full h-80 p-4 bg-white shadow-xl'>
          <div
            id='editor'
            className='flex flex-col items-center justify-center rounded-xl'
            style={{
              // background : backgroundColor ? backgroundColor : `linear-gradient(${direction}, ${startColor}, ${endColor})`,
              height: 290,
              backgroundImage: `url(${graph.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              Graph Preview
          </div>
        </div>
      </div>
    </div>
  );

}

export default DetailsPage