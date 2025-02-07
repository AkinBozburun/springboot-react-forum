import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import InformationPanel from '../components/InformationPanel';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Best programming languages to learn in 2025",
      comments: 120,
      date: "Jan 20, 2025",
      author: "JohnDoe",
      imageUrl: "https://picsum.photos/200/100",
    },
    {
      id: 2,
      title: "How to improve your productivity with Pomodoro technique",
      comments: 80,
      date: "Feb 1, 2025",
      author: "JaneSmith",
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      title: "What's the best laptop for remote work in 2025?",
      comments: 150,
      date: "Jan 15, 2025",
      author: "TechGuru",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "What's the best laptop for remote work in 2025?",
      comments: 150,
      date: "Jan 15, 2025",
      author: "TechGuru",
      imageUrl: "https://picsum.photos/200/400",
    },
  ];

  const categories = [
    {
      categoryName: 'Cars',
      content: [
        {
          name: "Bmw",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Audi",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Mercedes",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        }
      ]
    },
    {
      categoryName: 'Sports',
      content: [
        {
          name: "Football",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Basketball",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        },
        {
          name: "Volleyball",
          postsCount: 2000,
          commentsCount: 123456,
          lastPost: "2 min ago - JhonD"
        }
      ]
    }
  ];

  return (
    <div className='home'>
      <div className='content'>
        <div className="cards-container">
          <div className='cards-container-header'>Last Posts</div>

          {posts.map(post => (
            <div className="card-row" key={post.id}>
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
          <div className='category-container'>
            <div className='category-container-header'>{category.categoryName}</div>

            {category.content.map((content, index) => (
              <div className="category-row">
                <div className='category-item' key={index}>
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
