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
  const { title } = useParams();

  const articleTitle = Object.keys(articles);
  const decodedTitle = decodeURIComponent(title);
  const isArticleFound = articleTitle.includes(decodedTitle);
  const articleObject = articles[title];

  console.log(isArticleFound);

  return (
    <div id='article-container'>
      <div id="article">
        {isArticleFound ? (
          <>
            <h1>{decodedTitle}</h1>
            <img src={articleObject.img} alt="" />
            {articles[title].sections.map((section, index) => {
              switch (section.type) {
                case 'heading':
                  return (<h2>{section.content}</h2>)

                case 'para':
                  return (
                    Array.isArray(section.content)
                      ? section.content.map((para, i) => <p>{para}</p>)
                      : <p>{section.content}</p>
                  );

                case 'ul':
                  return (
                    <ul>
                      {section.content.map((list, i) => <li>{list.strong ? (
                        <>
                          <strong>{list.strong}</strong>
                          {list.text && ` ${list.text}`}
                        </>
                      ) : (list)}
                      </li>)}
                    </ul>
                  );

                case 'iframe':
                  return (
                    <iframe src={section.src} frameborder="0"></iframe>
                  )

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
  )
}