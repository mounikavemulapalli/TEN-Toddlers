import React, { useState } from "react";
import './Blog.css';
import blogData from '../../assets/data/blog-cards.json';
import BlogFooter from './BlogFooter';
import { Link, useParams } from 'react-router-dom';
import articles from '../../assets/data/articles.json';

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
          {filteredBlogs.map(blog => (
            <div className="blog">
              <a id="blog-img" href="#"><img src={blog.img} /></a>
              <div className="blog-content">
                <a href="#">{blog.title}</a>
                <p>{blog.text}</p>
                <Link to={`/blog/${encodeURIComponent(blog.title)}`}><button>Read More</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export const Article = () => {

  const renderContentItem = (item, index) => {
    if (typeof item === 'string') return item;

    switch (item.type) {
      case 'strong':
        return <strong key={index}> {item.text} </strong>;
      case 'anchor':
        return (
          <a key={index} href={item.href} target="_blank"> {item.text} </a>
        );
      default:
        return <p>{item.text}</p>;
    }
  };

  const renderContent = (content) => {
    if (!Array.isArray(content)) return renderContentItem(content, 0);
    return content.map((item, index) => renderContentItem(item, index));
  };

  const { title } = useParams();
  const articleTitle = Object.keys(articles);
  const decodedTitle = decodeURIComponent(title);
  const isArticleFound = articleTitle.includes(decodedTitle);

  console.log(isArticleFound);

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
                    return (<h2>{renderContent(section.content)}</h2>);

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
          <a href="#" rel="prev">← Previous Post</a>
          <a href="#" rel="next" style={{ textAlign: 'end' }}>Next Post →</a>
        </div>
      </nav>

      <div id="comments">
        <h3>Leave a Comment</h3>
        <form>
          <p>Your email address will not be published. Required fields are marked *</p>
          <fieldset>
            <textarea placeholder="Type here..." name="" id="" rows='8' style={{ width: '100%' }}></textarea>
          </fieldset>
          <div>
            <div className="input-box">
              <input id="author" placeholder='Name*' type="text" />
            </div>
            <div className="input-box">
              <input id="email" placeholder='Email*' type="text" />
            </div>
            <div className="input-box">
              <input id="url" placeholder='Website' type="text" />
            </div>
          </div>
          <div id="cookies-consent">
            <input type="checkbox" value='yes' id="cookies-consent-checkbox" style={{ marginRight: '.6rem' }} />
            <label htmlFor="cookies-consent-checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <button type="submit">Post Comment »</button>
        </form>
      </div>
    </>
  )
}