import React from "react";
import './Blog.css';
import blogData from './blogs.json';
import BlogFooter from './BlogFooter';

export default function Blog({ searchedKeyword }) {

  const filteredBlogs = blogData.filter(blog =>
    blog.title.toUpperCase().includes(searchedKeyword.toUpperCase()) ||
    blog.text.toUpperCase().includes(searchedKeyword.toUpperCase())
  );

  return (
    <div>
      <div id="container">
        {searchedKeyword == '' ? <h2 id='heading'>UPTODD PARENTING BLOGS</h2> : <h2 id="search-result-heading">SEARCH RESULTS FOR: {searchedKeyword.toUpperCase()}</h2>}
        <div id='line'></div>
        <div id="blogs-container">
          {filteredBlogs.map((blog) => (
            <div className="blog">
              <a id="blog-img" href="#"><img src={blog.img} /></a>
              <div className="blog-content">
                <a href="#">{blog.title}</a>
                <p>{blog.text}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};