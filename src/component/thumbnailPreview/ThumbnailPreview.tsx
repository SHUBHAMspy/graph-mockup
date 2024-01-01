import React from 'react'
import Preview from '../common/preview/Preview'
import ThemeSelection from '../themeSelection/ThemeSelection'

const ThumbnailPreview = () => {
  return (
    <section>
      <div className='rounded-xl w-full h-80 p-4 bg-slate-100'>
        <Preview/>
      </div>
      <ThemeSelection/>
    </section>
  )
}

export default ThumbnailPreview