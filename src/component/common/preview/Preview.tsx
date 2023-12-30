import React from 'react'

const Preview = () => {
  return (
    <div className='wrapper'>
      <div
        id='editor'
        className='flex flex-col items-center justify-center rounded-xl'
        style={{
          // background : backgroundColor ? backgroundColor : `linear-gradient(${direction}, ${startColor}, ${endColor})`,
          height: 290,
          backgroundImage: `url(https://picsum.photos/id/1/200/300)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          Graph Preview
      </div>
    </div>
  )
}

export default Preview