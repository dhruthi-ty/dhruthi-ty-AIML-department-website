import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is cooking,<br /> we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Dec 12, 2024" title = "DataKalpana"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Dec 7, 2024" title = "AI-Celerate Workshop 2024" />
          <Article imgUrl={blog03} date="June 5, 2024" title = "Coding Wednesday Hackathon" />
          <Article imgUrl={blog04} date="Oct 25, 2024" title = "Blitz-Pi Event Conducted"/>
          <Article imgUrl={blog05} date="Nov 19, 2024" title = "Center of Excellence" />
        </div>    
      </div>
    </div>
  );
}

export default Blog;