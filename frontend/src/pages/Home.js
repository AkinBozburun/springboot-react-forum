import React, { useContext } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import InformationPanel from '../components/InformationPanel';
import { PostsContext } from '../contexts/PostsContext';
import { CategoriesContext } from '../contexts/CategoriesContext';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const { categories } = useContext(CategoriesContext);

  return (
    <div className='home'>
      <div className='content'>
        <div className="cards-container">
          <div className='cards-container-header'>Last Posts</div>
          {posts.map(post => (
            <div className="card-row" key={post.div}>
              <div className="card-item">
                <div className="user-info">
                  <img src={post.imageUrl} alt={post.author} className="profile-img" />
                  <h6><Link to="/postDetails">{post.title}</Link></h6>
                </div>
              </div>
              <div className="card-item card-comment">{post.comments} Comments</div>
              <div className="card-item card-date">{post.date}</div>
              <div className="card-item card-author">Started by: <Link to="/">{post.author}</Link></div>
            </div>
          ))}
        </div>

        {categories.map((category, index) => (
          <div className='category-container' key={index}>
            <div className='category-container-header'>{category.categoryName}</div>

            {category.content.map((content, index) => (
              <div className="category-row" key={index}>
                <div className='category-item'>
                  <div className='category-item-title'>
                    <Link to={''}>{content.name}</Link>
                  </div>
                  <div className='category-item-post-count'>Posts <div>{content.postsCount}</div></div>
                  <div className='category-item-comment-count'>Comments <div>{content.commentsCount}</div></div>
                  <div className='category-item-last-post'>
                    <Link to={''}>last post</Link><div>{content.lastPost}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <InformationPanel />      
    </div>
  );
}

export default Home;