import React, { useState, useEffect } from "react";
import axios from "axios";
import { parentingStoriesData } from "../../assets/data/parentingStoriesData";
import "./ParentingStories.css";

function ParentingStories() {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    text: "",
  });
  const [reply, setReply] = useState({
    commentId: null,
    text: "",
    author: "", // Added author for reply
    email: "", // Added email for reply
  });
  const [replySaveDetails, setReplySaveDetails] = useState(false); // To save reply details in localStorage
  const [showUnapprovedMessage, setShowUnapprovedMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null); // For managing which comment we're replying to
  const totalDivs = parentingStoriesData.length;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const currentStory = parentingStoriesData[currentDiv - 1];
        const response = await axios.get(
          `https://uptodd-29rq.onrender.com/api/comments/${encodeURIComponent(
            currentStory.title
          )}`
        );

        // Ensure replies are initialized for all comments
        const commentsWithReplies = response.data.map((comment) => ({
          ...comment,
          replies: comment.replies || [],
        }));
        setComments(commentsWithReplies);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setComments([]);
      }
    };

    fetchComments();
  }, [currentDiv]);

  const changeDiv = (direction) => {
    if (direction === "next") {
      setCurrentDiv((currentDiv % totalDivs) + 1);
    } else if (direction === "prev") {
      setCurrentDiv(((currentDiv - 2 + totalDivs) % totalDivs) + 1);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const currentStory = parentingStoriesData[currentDiv - 1];
    try {
      const response = await axios.post(
        `https://uptodd-29rq.onrender.com/api/comments/${encodeURIComponent(
          currentStory.title
        )}`,
        newComment
      );
      setComments([...comments, { ...response.data, replies: [] }]);
      setNewComment({ author: "", email: "", text: "" });
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };
  const handleReplySubmit = async (commentId, e) => {
    e.preventDefault(); // Make sure `e` is the event object

    if (!reply.author || !reply.email || !reply.text) {
      console.error("All fields are required");
      return;
    }

    setIsSubmitted(true);

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(reply.email)) {
      const errorMessage = "Invalid email address"; // Error message
      setErrorMessage(errorMessage);
      console.error(errorMessage);
      setIsSubmitted(false);
      return;
    }

    setErrorMessage("");

    // Save details in localStorage if the user checked the box
    if (replySaveDetails) {
      localStorage.setItem("reply.author", reply.author);
      localStorage.setItem("reply.email", reply.email);
    }
    if (replySaveDetails) {
      setReply({ ...reply, author: reply.author, email: reply.email });
    }

    const currentStory = parentingStoriesData[currentDiv - 1];

    try {
      const response = await axios.post(
        `https://uptodd-29rq.onrender.com/api/comments/${encodeURIComponent(
          currentStory.title
        )}/${commentId}/reply`,
        {
          author: reply.author,
          email: reply.email,
          text: reply.text,
        }
      );

      console.log("Reply added", response.data);

      // Find the comment and add the new reply
      const updatedComments = comments.map((comment) =>
        comment._id === commentId
          ? { ...comment, replies: [...comment.replies, response.data] }
          : comment
      );
      setComments(updatedComments);
      setReplyingTo(null);

      setReply({ commentId: null, text: "", author: "", email: "" });
      setIsSubmitted(false);
      setShowUnapprovedMessage(true);
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  const handleReplyClick = (comment) => {
    setReplyingTo(comment._id);
    setShowUnapprovedMessage(false);
    if (!comment.approved) {
      setShowUnapprovedMessage(true);
    } else {
      setReplyingTo(comment._id);
      setShowUnapprovedMessage(false);
    }
  };

  const handleDelete = async (commentId) => {
    const currentStory = parentingStoriesData[currentDiv - 1];
    try {
      await axios.delete(
        `https://uptodd-29rq.onrender.com/api/comments/${encodeURIComponent(
          currentStory.title
        )}/${commentId}`
      );
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment: ", error);
    }
  };

  const handleDeleteReply = async (commentId, replyId) => {
    const currentStory = parentingStoriesData[currentDiv - 1];
    try {
      await axios.delete(
        `https://uptodd-29rq.onrender.com/api/comments/${encodeURIComponent(
          currentStory.title
        )}/${commentId}/reply/${replyId}`
      );

      const updatedComments = comments.map((comment) =>
        comment._id === commentId
          ? {
              ...comment,
              replies: comment.replies.filter((reply) => reply._id !== replyId),
            }
          : comment
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error deleting reply:", error);
    }
  };

  return (
    <div className='p-container'>
      {parentingStoriesData.map((story, index) => (
        <div
          key={story.id}
          className={`p-content ${currentDiv === index + 1 ? "active" : ""}`}
        >
          <main className='p-main-container'>
            <div className='p-content-wrapper'>
              <div className='p-content-section'>
                <h1 className='p-section-title'>{story.title}</h1>
                <img
                  src={story.image}
                  alt='Parenting Story'
                  className='p-story-image'
                />
              </div>
              {story.content.map((section, i) => (
                <div key={i} className='p-content-section'>
                  <h2 className='p-section-title'>{section.heading}</h2>
                  {section.text && (
                    <p className='p-section-paragraph'>{section.text}</p>
                  )}
                  {section.points && (
                    <ul>
                      {section.points.map((point, j) => (
                        <li key={j}>
                          {typeof point === "string" ? (
                            <p>{point}</p>
                          ) : (
                            <>
                              <strong>{point.title}</strong>
                              <ul>
                                {point.subPoints.map((subPoint, k) => (
                                  <li key={k}>{subPoint}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.video && (
                    <div className='p-video-container'>
                      <iframe
                        width='760'
                        height='415'
                        src='https://www.youtube.com/embed/CNLYum2LT0A?si=MIHwW8OX17-c_yOE'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                      ></iframe>
                      <p className='p-video-caption'>
                        Explore the video to understand {section.heading}.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          <div className='p-navigation'>
            <button onClick={() => changeDiv("prev")}>Previous</button>
            <button onClick={() => changeDiv("next")}>Next</button>
          </div>

          <div className='comments-part'>
            <div className='p-comments'>
              <h3>{comments.length > 0 ? `Comments` : "No comments yet"}</h3>
              {comments.map((comment) => (
                <div key={comment._id} className='comment'>
                  <p>
                    <strong>{comment.author}</strong>: {comment.text}
                  </p>
                  <div className='comment-buttons'>
                    <button onClick={() => handleDelete(comment._id)}>
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setReply({
                          commentId: comment.id,
                          text: "",
                          author: "", // Reset name and email
                          email: "",
                        })
                      }
                    >
                      Reply
                    </button>
                  </div>
                  {comment.replies.map((reply) => (
                    <div key={reply._id} className='reply'>
                      <p>
                        <strong>{reply.author}</strong>: {reply.text}
                      </p>
                      <button
                        onClick={() =>
                          handleDeleteReply(comment._id, reply._id)
                        }
                      >
                        Delete Reply
                      </button>
                    </div>
                  ))}
                  {reply.commentId === comment.id && (
                    <form onSubmit={(e) => handleReplySubmit(comment._id, e)}>
                      <div className='reply-inputs'>
                        <input
                          type='text'
                          placeholder='Your name'
                          value={reply.author}
                          onChange={(e) =>
                            setReply({ ...reply, author: e.target.value })
                          }
                          required
                        />
                        <input
                          type='email'
                          placeholder='Your email'
                          value={reply.email}
                          onChange={(e) =>
                            setReply({ ...reply, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <textarea
                        placeholder='Your reply'
                        value={reply.text}
                        onChange={(e) =>
                          setReply({ ...reply, text: e.target.value })
                        }
                        required
                      />
                      <div className='rpl'>
                        <button type='submit'>Add Reply</button>
                        <button
                          type='button'
                          onClick={() => {
                            setReplyingTo(null);
                            setReply({
                              commentId: null,
                              text: "",
                              author: "",
                              email: "",
                            });
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
              <form onSubmit={handleCommentSubmit}>
                <div className='p-comments-inputBoxs'>
                  <input
                    type='text'
                    placeholder='Your name'
                    value={newComment.author}
                    onChange={(e) =>
                      setNewComment({ ...newComment, author: e.target.value })
                    }
                    required
                  />
                  <input
                    type='email'
                    placeholder='Your email'
                    value={newComment.email}
                    onChange={(e) =>
                      setNewComment({ ...newComment, email: e.target.value })
                    }
                    required
                  />
                </div>
                <textarea
                  placeholder='Your comment'
                  value={newComment.text}
                  onChange={(e) =>
                    setNewComment({ ...newComment, text: e.target.value })
                  }
                  required
                />
                <button type='submit'>Add Comment</button>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ParentingStories;
