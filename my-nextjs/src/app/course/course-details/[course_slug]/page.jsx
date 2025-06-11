import React from 'react'

export default function CourseDetailsPage({params}) {
  return (
    <>
    
    <main>
        <h1>this is the course detail page</h1>
    </main>
    <main>
        <h2> course detail of {params.course_slug}</h2>
    </main>
    </>
  )
}
