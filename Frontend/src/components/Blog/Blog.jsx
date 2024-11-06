import React, { useEffect,useState } from "react";
import './Blog.css';
import BlogFooter from './BlogFooter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import articles from '../../assets/data/articles.json';
import axios from "axios";

export default function Blog({ searchedKeyword, setSelectedTitle }) {

  const getPreview = (para) => {
    return typeof para == 'string' && para.split(' ').slice(0, 20).join(' ') + '...';
  }

  const articleArray = Object.entries(articles);
  const cardText = articleArray.find(([title, article]) => article.sections.every(section => section.type == 'para'));

  const filteredBlogs = articleArray.filter(([title, article]) =>
    title.toUpperCase().includes(searchedKeyword.toUpperCase()) ||
    (cardText && cardText[1].sections.some(section =>
      section.type === 'para' && section.content.toUpperCase().includes(searchedKeyword.toUpperCase())
    ))
  );

  return (
    <div>
      <div id="container">
        {searchedKeyword == '' ? <h2 id='heading'>UPTODD PARENTING BLOGS</h2> : <h2 id="search-result-heading">SEARCH RESULTS FOR: {searchedKeyword.toUpperCase()}</h2>}
        <div id='line'></div>
        <div id="blogs-container">
          {filteredBlogs.map(([title, article]) => {
            const blogPostRoute = `/blog/${encodeURIComponent(title)}`;

            return (
              <div className="blog">
                <a id="blog-img" href={blogPostRoute}><img src={article.sections.find(section => section.type == "img")?.src} /></a>
                <div className="blog-content">
                  <Link to={blogPostRoute}>{title}</Link>
                  <p>{getPreview(article.sections.find(section => section.type === "para").content)}</p>
                  <Link to={blogPostRoute}><button>Read More</button></Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export const Article = () => {
  const [comments,setComments]=useState([])
  const [isSubmitted,setIsSubmitted]=useState(false)
  const [newComment,setNewComment]=useState({author:'',email:'',text:''});

  const [replyingTo,setReplyingTo]=useState(null);
  const [replyText,setReplyText]=useState('');
  const [replyAuthor,setReplyAuthor]=useState("");
  const [replyEmail,setReplyEmail]=useState('');
  const [showReplies,setShowReplies]=useState({});
  const [showUnapprovedMessage,setShowUnapprovedMessage]=useState(false);
  const [errorMessage,setErrorMessage]=useState("");
  const navigate=useNavigate();



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
  const prevIndex = currentIndex < articleTitles.length - 1 ? articleTitles[currentIndex + 1] : null;
  const nextIndex = currentIndex > 0 ? articleTitles[currentIndex - 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);



  useEffect(() => {
    // Fetch comments for the current article
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/comments/${encodeURIComponent(title)}`);
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

//Render only the latest comment
const latestComment=comments[comments.length - 1] //Get the latest comment if available

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsSubmitted(true);
    const validateEmail=(email)=>{
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      return re.test(String(newComment.email).toLowerCase());
    }

    if(!newComment.author || !newComment.email || !newComment.text){
      const errorMessage ="All fields are required"; //Error message
      setErrorMessage(errorMessage);
      console.error(errorMessage);
      setIsSubmitted(false);
    
      return
    }

    if(!validateEmail(newComment.email)){
      const errorMessage="Invalid email address"; //Error message
      setErrorMessage(errorMessage);
      console.error(errorMessage);
      setIsSubmitted(false);
      return
    }
    setErrorMessage('');

    axios.post(`http://localhost:3000/api/comments/${encodeURIComponent(title)}`,newComment)
    .then(response=>{
      setComments([...comments,response.data]);
      setNewComment({author:'',email:'',text:''});
    })
    .catch(error=>console.error(error))
    setIsSubmitted(false)
  }


const handleDelete=async(commentId)=>{
  try {
    await axios.delete(`http://localhost:3000/api/comments/${encodeURIComponent(title)}/${commentId}`);
    setComments(comments.filter(comment=>comment._id!==commentId));
  } catch (error) {
    console.error("Error deleting comment: ",error)
  }
}

const handleReplySubmit=async(e,commentId)=>{
  e.preventDefault();
  if(!replyAuthor || !replyEmail || !replyText){
    console.error("All fields are required");
    return;
  }

  setIsSubmitted(true);
  const validateEmail=(email)=>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return re.test(String(replyEmail).toLowerCase());
  }

  
  if(!validateEmail(replyEmail)){
    const errorMessage="Invalid email address"; //Error message
    setErrorMessage(errorMessage);
    console.error(errorMessage);
    setIsSubmitted(false);
    return
  }
  setErrorMessage('');

//if approved, proceed with submitting the reply
  try {

    //Only write this logic if you want to display reply text
    //  const response=await axios.post(`http://localhost:3000/api/comments/${encodeURIComponent(title)}/${commentId}/reply`,{
    //   author:replyAuthor,
    //   email:replyEmail,
    //   text:replyText,
    //  });
    //  console.log("Reply added",response.data);
     

    //  //Find the comment and add the new reply
    //  const updatedComments=comments.map(comment=>{
    //   if(comment._id === commentId){
    //     return {...comment, replies:[...comment.replies,response.data]};

    //   }
    //   return comment;
    //  })
    //  setComments(updatedComments);
     setReplyingTo(null);
     
     setReplyText('');
     setReplyAuthor('');
     setReplyEmail('');
     setIsSubmitted(false);
     setShowUnapprovedMessage(true);
     navigate("/unapproved");
     
  } catch (error) {
    console.error("Error submitting reply:",error);
  }
}
const handleReplyClick=(comment)=>{
  setReplyingTo(comment._id);
  setShowUnapprovedMessage(false);
  if(!comment.approved){
    setShowUnapprovedMessage(true);
  }else{
    setReplyingTo(comment._id);
    setShowUnapprovedMessage(false);
  }
};

const handleDeleteReply=async(commentId,replyId)=>{
  try {
    const response= await axios.delete(`http://localhost:3000/api/comments/${encodeURIComponent(title)}/${encodeURIComponent(commentId)}/reply/${replyId}`);
    if(response.status===200){

      setComments(prevComments=>prevComments.map(comment=>comment._id === commentId ? {...comment,replies:comment.replies.filter(reply=>reply._id !==replyId)}:comment));
    }

  } catch (error) {
    console.error("Error deleting reply: ",error);
  }
}
const toggleReplies=(commentId)=>{
  setShowReplies(prev=>({
    ...prev,[commentId]:!prev[commentId]
  }))
}
  return (
    <>
      <div id='article-container'>
        <div id="article">
          {isArticleFound ? (
            <>
              <h1>{decodedTitle}</h1>
              {articles[title].sections.map((section, index) => {
                switch (section.type || section.img) {
                  case 'img':
                    return (<img src={section.src}></img>);

                  case 'heading':
                    return (<h1 id={section.id}>{renderContent(section.content)}</h1>);

                  case 'para':
                    return (<p>{renderContent(section.content)}</p>);

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
                      <iframe src={section.src}></iframe>
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
          {prevIndex ? <Link title={prevIndex} to={`/blog/${encodeURIComponent(prevIndex)}`} rel="prev">← Previous Post</Link> : <a></a>}
          {nextIndex && <Link title={nextIndex} to={`/blog/${encodeURIComponent(nextIndex)}`} style={{ textAlign: 'end' }} rel="next">Next Post →</Link>}
        </div>
      </nav>
 

 {/* Show comments here */}
      

      <div id="comments">

      
      {/* <h3>{comments.length} thoughts on "{decodedTitle}"</h3> */}
      <h3>{latestComment ? `1 thought on "${decodedTitle}"` : "No comments yet"} </h3>
      <div className="comments-list">  
        
      </div>
      {/* {comments.map((comment,index)=>( */}
      {latestComment && (

         <div key={latestComment.index} className="comment">
          <div className="comment-header">
            
          <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=170667a&w=0&k=20&c=EpwfsVjTx8cqJJZzBMp__1qJ_7qSfsMoWRGnVGuS8Ew=" alt="Avatar" className="avatar" />
          <div className="comment-name">
          <strong>{latestComment.author}</strong>
          <span className="comment-date">{new Date(latestComment.date).toLocaleDateString("en-US",{
            year:'numeric',
            month:"long",
            day:"numeric"
          })} at {
            new Date(latestComment.date).toLocaleTimeString("en-US",{
              hour:"numeric",
              minute:"numeric",
              hour12:true
            })
          }</span>


          </div>
          <button style={{color:"#ff007f",margin:"1rem",padding:"0.3rem",fontSize:"1rem",display:"flex",flexDirection:"row-reverse"}} onClick={()=>handleDelete(latestComment._id)}>Delete</button>
          </div>
           
          <p className="comment-text">{latestComment.text}</p>
          {/* <a href="#reply" className="reply-link" onClick={()=>handleReplyClick(comment)}>Reply</a> */}
             {/* Unapproved Reply message  */}
             {showUnapprovedMessage && !latestComment.approved && (
              <div className="unapproved-message">
                <p>Sorry, replies to unapproved comments are not allowed</p>
                <Link to="/blog">« Back</Link>

              </div>
             )}

             {/* it is used to display replies  */}

          {/* {comment.replies && comment.replies.length>0 && (
            <div className="replies">
              {
                comment.replies.map((reply,index)=>(
                  <div key={index} className="reply">
                    <strong>{reply.author}</strong>
                    <span className="reply-date">  
                      {new Date(reply.date).toLocaleDateString("en-US",{month:"long",day:"numeric"})} at         
                      {new Date(reply.date).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:true})}
                    </span>
                       <p>{reply.text}</p>

<button style={{color:"#ff007f",margin:"1rem",padding:"0.3rem",fontSize:"1rem",display:"flex",flexDirection:"row-reverse"}} onClick={()=>handleDeleteReply(comment._id,reply._id)}>DelReply</button>
                  </div>
                ))
              }



            </div>
          )} */}

          {/* Reply link and form  */}
          <a href="#reply" className="reply-link" onClick={()=>setReplyingTo(latestComment._id)}>Reply</a>
          {replyingTo === latestComment._id  && (


            <form onSubmit={(e)=>handleReplySubmit(e,latestComment._id)} >
              <p className="reply-header">
                <strong>Reply to {latestComment.author}</strong>
                <button type="button" onClick={()=>setReplyingTo(null)} className="cancel-reply">Cancel</button>
              </p>


              <p>Your email address will not be published.Required fields are marked *</p>

              
              {/* <textarea placeholder="Type here.."
               value={replyText}
               onChange={()=>setReplyText(e.target.value)}
               required
              
              >

              </textarea>
              <div className="reply-form-fields">
      <input 
        type="text" 
        placeholder="Name*" 
        value={replyAuthor} 
        onChange={(e) => setReplyAuthor(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email*" 
        value={replyEmail} 
        onChange={(e) => setReplyEmail(e.target.value)} 
        required 
      />
      
                     <input id="url" placeholder='Website' type="text" />

      
    </div>
    
    <div className="reply-form-footer">
      <label>
        <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
      </label>
      <button type="submit" className="submit-reply">POST COMMENT »</button>
    </div> */}


<fieldset>
            <textarea placeholder="Type here..." name="" id="" rows='8' style={{ width: '100%' }} value={replyText} onChange={(e)=>setReplyText(e.target.value)} required></textarea>
          </fieldset>
          <div>
            <div className="input-box">
              <input id="author" placeholder='Name*' type="text" value={replyAuthor} onChange={(e)=>setReplyAuthor(e.target.value)} required/>
            </div>
            <div className="input-box">
              <input id="email" placeholder='Email*' type="text" value={replyEmail} onChange={(e)=>setReplyEmail(e.target.value)} required/>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            </div>
            <div className="input-box">
              <input id="url" placeholder='Website' type="text" />
            </div>
          </div>
          <div id="cookies-consent">
            <input type="checkbox" value='yes' id="cookies-consent-checkbox" style={{ marginRight: '.6rem' }} />
            <label htmlFor="cookies-consent-checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <button type="submit">Post Reply » </button>

            </form>
          )}


          <p className="moderation-notice">Your comment awaiting moderation.</p>

        </div>

      )}




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
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            </div>
            <div className="input-box">
              <input id="url" placeholder='Website' type="text" />
            </div>
          </div>
          <div id="cookies-consent">
            <input type="checkbox" value='yes' id="cookies-consent-checkbox" style={{ marginRight: '.6rem' }} />
            <label htmlFor="cookies-consent-checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <button type="submit">
            {isSubmitted ?(<span>Loading...</span>)
          : ("Post Comment » " )  
          }
            </button>
        </form>



      </div>
      <BlogFooter />
    </>
  )
}