import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="cards-container">
      <div className='cards-container-header'> Last Posts </div>
      <div className="card-row">
        <div className="card-item">
          <div className="user-info">
            <img src="https://picsum.photos/200/100" alt="JohnDoe" className="profile-img" />
            <h6><a href="/postDetails">Best programming languages to learn in 2025</a></h6>
          </div>
        </div>
        <div className="card-item card-comment">120 Comments</div>
        <div className="card-item card-date">Jan 20, 2025</div>
        <div className="card-item card-author">Started by: <a href="/">JohnDoe</a></div>
      </div>
      <div className="card-row">
        <div className="card-item">
          <div className="user-info">
            <img src="https://picsum.photos/200/200" alt="JaneSmith" className="profile-img" />
            <h6><a href="/postDetails">How to improve your productivity with Pomodoro technique</a></h6>
          </div>
        </div>
        <div className="card-item card-comment">80 Comments</div>
        <div className="card-item card-date">Feb 1, 2025</div>
        <div className="card-item card-author">Started by: <a href="/">JaneSmith</a></div>
      </div>
      <div className="card-row">
        <div className="card-item">
          <div className="user-info">
            <img src="https://picsum.photos/200/300" alt="TechGuru" className="profile-img" />
            <h6><a href="/postDetails">What's the best laptop for remote work in 2025?</a></h6>
          </div>
        </div>
        <div className="card-item card-comment">150 Comments</div>
        <div className="card-item card-date">Jan 15, 2025</div>
        <div className="card-item card-author">Started by: <a href="/">TechGuru</a></div>
      </div>
      <div className="card-row">
        <div className="card-item">
          <div className="user-info">
            <img src="https://picsum.photos/200/400" alt="TechGuru" className="profile-img" />
            <h6><a href="/postDetails">What's the best laptop for remote work in 2025?</a></h6>
          </div>
        </div>
        <div className="card-item card-comment">150 Comments</div>
        <div className="card-item card-date">Jan 15, 2025</div>
        <div className="card-item card-author">Started by: <a href="/">TechGuru</a></div>
      </div>
    </div>
  );
}

export default Home;