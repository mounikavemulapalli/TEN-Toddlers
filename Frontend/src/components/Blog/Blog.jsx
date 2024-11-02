import React, { useEffect, useState } from "react";
import './Blog.css';
import blogData from '../../assets/data/blog-cards.json';
import BlogFooter from './BlogFooter';
import { Link, useParams } from 'react-router-dom';
import articles from '../../assets/data/articles.json';
import axios from "axios";

export default function Blog({ searchedKeyword, setSelectedTitle }) {

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
          {filteredBlogs.map(blog => {
            const blogPostRoute = `/blog/${encodeURIComponent(blog.title)}`;

            return (
            <div className="blog">
              <a id="blog-img" href={blogPostRoute}><img src={blog.img} /></a>
              <div className="blog-content">
                <a href={blogPostRoute}>{blog.title}</a>
                <p>{blog.text}</p>
                <Link to={blogPostRoute}><button>Read More</button></Link>
              </div>
            </div>
          )})}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export const Article = () => {
  const [comments,setComments]=useState([])
  const [isSubmitted,setIsSubmitted]=useState(null)
  const [newComment,setNewComment]=useState({author:'',email:'',text:''});


  const renderContentItem = (item, index) => {
    if (typeof item === 'string') return item;

    switch (item.type) {
      case 'strong':
        return <strong key={index}> {item.text} </strong>;
      case 'anchor':
        return (
          <a key={index} href={item.href} target={item.href.includes('#') ? '_self' : '_blank'}> {item.text} </a>
        );
      default:
        return <p>{item.text}<br /></p>;
    }
  };

  const renderContent = (content) => {
    if (!Array.isArray(content)) return renderContentItem(content, 0);
    return content.map((item, index) => renderContentItem(item, index));
  };

  const { title } = useParams();

  

  const articleTitles = Object.keys(articles);
  const decodedTitle = decodeURIComponent(title);
  const isArticleFound = articleTitles.includes(decodedTitle);
  const currentIndex = articleTitles.indexOf(decodedTitle);
  const prevIndex = currentIndex > 0 ? articleTitles[currentIndex - 1] : null;
  const nextIndex = currentIndex < articleTitles.length - 1 ? articleTitles[currentIndex + 1] : null;

  console.log(isArticleFound);


  // useEffect(() => {
  //   axios.get(`/api/comments/${title}`)
  //   .then(response=>setComments(response.data))
  //   .catch(error=>console.error(error))

  // },[title]);

  useEffect(() => {
    // Fetch comments for the current article
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://uptodd.onrender.com/api/comments/${encodeURIComponent(title)}`);
        console.log(response.data);
        setComments(Array.isArray(response.data) ? response.data:[]);
        
        // setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
      }
    };
    fetchComments();
  }, [title]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsSubmitted(true);

    if(!newComment.author || !newComment.email || !newComment.text){
      console.error("All fields are required");
      return
    }
    axios.post(`https://uptodd.onrender.com/api/comments/${encodeURIComponent(title)}`,newComment)
    .then(response=>{
      setComments([...comments,response.data]);
      setNewComment({author:'',email:'',text:''});
    })
    .catch(error=>console.error(error))
    setIsSubmitted(false)
  }
const handleDelete=async(commentId)=>{
  try {
    await axios.delete(`https://uptodd.onrender.com/api/comments/${encodeURIComponent(title)}/${commentId}`);
    setComments(comments.filter(comment=>comment._id!==commentId));
  } catch (error) {
    console.error("Error deleting comment: ",error)
  }
}


  return (
    <>
      <div id='article-container'>
        <div id="article">
          {isArticleFound ? (
            <>
              <h1>{decodedTitle}</h1>
              <img src={(articles[title]).img} />
              {articles[title].sections.map((section, index) => {
                switch (section.type) {
                  case 'heading':
                    return (<h2 id={section.id}>{renderContent(section.content)}</h2>);

                  case 'para':
                    return (
                      <p>{renderContent(section.content)}</p>
                    );

                  case 'ul':
                    return (
                      <ul>
                        {section.content.map((list, i) => <li>{renderContent(list)}</li>)}
                      </ul>
                    );

                  case 'ol':
                    return (
                      <ol>
                        {section.content.map((list, i) => <li>{renderContent(list)}</li>)}
                      </ol>
                    )

                  case 'iframe':
                    return (
                      <iframe src={section.src} frameborder="0"></iframe>
                    );

                  default:
                    return null;
                }
              })}
            </>
          ) : (
            <h1>Article not found</h1>
          )}
        </div>
      </div>

      <nav id="blog-page-nav">
        <div id="blog-page-nav-links">
          {prevIndex ? <Link to={`/blog/${encodeURIComponent(prevIndex)}`} rel="prev">← Previous Post</Link> : <a></a>}
          {nextIndex && <Link to={`/blog/${encodeURIComponent(nextIndex)}`} style={{textAlign: 'end'}} rel="next">Next Post →</Link>}
        </div>
      </nav>
 

 {/* Show comments here */}
      

      <div id="comments">

      
      <h3>{comments.length} thoughts on "{decodedTitle}"</h3>
      <div className="comments-list">  
        
      </div>
      {comments.map((comment,index)=>(
         <div key={index} className="comment">
          <div className="comment-header">
            
          <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=170667a&w=0&k=20&c=EpwfsVjTx8cqJJZzBMp__1qJ_7qSfsMoWRGnVGuS8Ew=" alt="Avatar" className="avatar" />
          <div className="comment-name">
          <strong>{comment.author}</strong>
          <span className="comment-date">{new Date(comment.date).toLocaleDateString("en-US",{
            year:'numeric',
            month:"long",
            day:"numeric"
          })} at {
            new Date(comment.date).toLocaleTimeString("en-US",{
              hour:"numeric",
              minute:"numeric",
              hour12:true
            })
          }</span>


          </div>
          <button style={{color:"#ff007f",margin:"1rem",padding:"0.3rem",fontSize:"1rem",display:"flex",flexDirection:"row-reverse"}} onClick={()=>handleDelete(comment._id)}>Delete</button>
          </div>
           
          <p className="comment-text">{comment.text}</p>
          <a href="#reply" className="reply-link">Reply</a>
          <p className="moderation-notice">Your comment awaiting moderation.</p>

        </div>
))}

        <h3>Leave a Comment</h3>
        <form onSubmit={handleSubmit}>
          <p>Your email address will not be published. Required fields are marked *</p>
          <fieldset>
            <textarea placeholder="Type here..." name="" id="" rows='8' style={{ width: '100%' }} value={newComment.text} onChange={(e)=>setNewComment({...newComment,text:e.target.value})}  required></textarea>
          </fieldset>
          <div>
            <div className="input-box">
              <input id="author" placeholder='Name*' type="text" value={newComment.author} onChange={(e)=>setNewComment({...newComment,author:e.target.value})} required/>
            </div>
            <div className="input-box">
              <input id="email" placeholder='Email*' type="text" value={newComment.email} onChange={(e)=>setNewComment({...newComment,email:e.target.value})} required/>
            </div>
            <div className="input-box">
              <input id="url" placeholder='Website' type="text" />
            </div>
          </div>
          <div id="cookies-consent">
            <input type="checkbox" value='yes' id="cookies-consent-checkbox" style={{ marginRight: '.6rem' }} />
            <label htmlFor="cookies-consent-checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <button type="submit">{isSubmitted ?"Wait a min":"Post Comment »"} </button>
        </form>



      </div>
      <BlogFooter />
    </>
  )
}