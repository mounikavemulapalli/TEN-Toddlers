import React, { useEffect } from "react";
import './Blog.css';
import BlogFooter from './BlogFooter';
import { Link, useParams } from 'react-router-dom';
import articles from '../../assets/data/articles.json';

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
      <BlogFooter />
    </>
  )
}