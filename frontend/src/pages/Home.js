import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import InformationPanel from '../components/InformationPanel';
import { getAllPost } from '../services/postService';
import { categories } from '../data';

const Home = () => {
  const [postData, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPost();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message)
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // error message
  if (error) {
    return <div>{error}</div>;
  }
  const toKebabCase = (str) => {
    return str.toLowerCase().split(" ").join("-");
  }
  console.log(postData.data);
  return (
    <div className='home'>
      <div className='content'>
        <div className="cards-container">
          <div className='cards-container-header'>Last Posts</div>
          {postData.data.map(post => (

            <div className="card-row" key={post.id}>
              <div className="card-item">
                <div className="user-info">
                  <img src='https://picsum.photos/200/100' alt={post.author.username} className="profile-img" />
                  <h6><Link to={`/postDetails/${toKebabCase(post.title)}.${post.id}`}>{post.title}</Link></h6>
                </div>
              </div>
              <div className="card-item card-comment">{post.comments} Comments</div>
              <div className="card-item card-date">{post.createdAt}</div>
              <div className="card-item card-author">Started by: <Link to={`/profile/${post.author.username}.${post.author.id}`}>{post.author.username}</Link></div>
            </div>
          ))}
        </div>

        {categories.map((category, index) => (
          <div className='category-container' key={index}>
            <div className='category-container-header'>{category.categoryName}</div>

            {category.content.map((content, index) => (
              <div className="category-row" key={index}>
                <div className='category-item' >
                  <div className='category-item-title'>
                    <Link to={'/'}>{content.name}</Link>
                  </div>
                  <div className='category-item-post-count'>Posts <div>{content.postsCount}</div></div>
                  <div className='category-item-comment-count'>Comments <div>{content.commentsCount}</div></div>
                  <div className='category-item-last-post'>
                    <Link to={'/'}>last post</Link><div>{content.lastPost}</div>
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
