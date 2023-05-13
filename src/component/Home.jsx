import React, { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blog, setBlog] = useState([
        {title:"Shalom Soln", author:"ShalomSolutions", content:"Shalom Solutions is a tech startup. A manifestation of a generic idea of a young man {JUWON} - who is driven by problem resolution. Welcome to our blog", id:1},
        {title:"Code Log", author:"CodeLogistics", content :"CodeLogistics is a subsidairy of Shalom solutions, a node implemented to create logistics solutions for the world at large, a solution that would entail tracking, nformations dissemination etc.", id:2},
        {title:"Dora Col", author:"DoraCollection", content:"Welcome to Dora collections your one stop online store where you can find all that you need and more for both female and male wears", id:3},
        {title:"Amila Soln", author:"AmilaSolution", content:"A wonderful tech start up initiative by a wonderful woman aspiring to be great, modelled with excellent initiative to create solutions to make the world easier", id:4}
    ])

    const handleAddBlog = (newBlog) => {
        setBlog([...blog, newBlog]);
      };
    
  return (
    <div className='home'>
       <BlogList data={blog} title="All Blogs" onAddBlog={handleAddBlog} />
      
    </div>
  )
}

export default Home