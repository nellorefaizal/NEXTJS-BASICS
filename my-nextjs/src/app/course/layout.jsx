import React, { Children } from 'react'

export default function CourseLayout({children}) {
  return (
    <div style={{border:"1px solid blue"}}>
        {children}
    </div>
  )
}
