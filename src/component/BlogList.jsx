import React, { useState } from 'react'

const BlogList = ({title, data, onAddBlog}) => {
    const [addBlog, setAddBlog] = useState({
        title: '',
        content: '',
        author: '',
    })
    

    const handleInput = (e) => {
        const {name, value} = e.target;
        setAddBlog({...addBlog, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addBlog);
        const newBlog = {
          id: data.length + 1,
          title: addBlog.title,
          content: addBlog.content,
          author: addBlog.author,
        };
        onAddBlog(newBlog);
        setAddBlog({ title: '', content: '', author: '' });
      };

      const onEditBlog = (id) => {
        // Get the blog post from the database.
        const blogPost = data.find((d) => d.id === id);
      
        // Check if the id exists in the database.
        if (blogPost) {
          // Get the edit-blog-modal element.
          const modal = document.getElementById("edit-blog-modal");
      
          // Open the modal dialog with the blog post's details.
          modal.querySelector(".modal-title").innerText = blogPost.title;
          modal.querySelector(".modal-body").innerHTML = blogPost.content;
          modal.showModal();
        } else {
          console.log("The blog post with id " + id + " does not exist.");
        }
      };
      
      
      const onDeleteBlog = (id) => {
        // Check if the id exists in the database.
        const blogPost = data.find((d) => d.id === id);
        
        // If the id exists, delete the blog post from the database.
        if (blogPost) {
          const filteredData = data.filter((d) => d.id !== id);
          onAddBlog(filteredData);
        } else {
          console.log("The blog post with id " + id + " does not exist.");
        }
      };
      
      
      
      
  return (
    <div className='blog-list'>
        <h2>{title}</h2>
        <div className='container'>
            <label htmlFor="submit" className='lead'>Blog Name:</label>
            <input type="text" className='form-control mb-2' name='title' value={addBlog.title} onChange={handleInput}/>
            <label htmlFor="submit" className='lead'>Blog Content:</label>
            <input type="text" className='form-control mb-2' name='content' value={addBlog.content} onChange={handleInput}/>
            <label htmlFor="submit" className='lead'>Blog Author</label>
            <input type="text" className='form-control mb-2' name='author' value={addBlog.author} onChange={handleInput}/>
            <button type='submit' className='btn btn-primary mt-2' onClick={handleSubmit}>Add Blog</button>

        </div>

       {data.map((d) =>(
         <div className='blog-preview' key={d.id}>
        <h1>{d.title}</h1>
         <h2> {d.content} </h2>
      <p>Written by: {d.author}</p> 
      <button type='button' className='btn btn-secondary mx-2' onClick={() => onEditBlog(d.id)}>Edit</button>
        <button type='button' className='btn btn-danger' onClick={() => onDeleteBlog(d.id)}>Delete</button>
      </div>
       ))}

    </div>
  )
}

export default BlogList