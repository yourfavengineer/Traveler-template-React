import React from 'react'

import PropTypes from 'prop-types'

import './article.css'

const Article = (props) => {
  return (
    <div className={`article-article ${props.rootClassName} `}>
      <img alt="image" src={props.image} className="article-image" />
      <div className="article-content">
        <div className="article-heading">
          <h2 className="article-header">{props.header}</h2>
          <p className="article-description">{props.description}</p>
        </div>
        <button className="button-arrow button">
          <span className="article-text">Read more</span>
          <span className="article-text1">&gt;</span>
        </button>
      </div>
    </div>
  )
}

Article.defaultProps = {
  rootClassName: '',
  image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  header: 'Understand your customers',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
}

export default Article
