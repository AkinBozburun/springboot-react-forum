import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';
import InformationPanel from '../components/InformationPanel';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../services/userService';


// create utils
const getIdFromURL = (str) => {
    const id = str.split('.');
    return id[id.length - 1];
}
const toKebabCase = (str) => {
    return str.toLowerCase().split(" ").join("-");
}

const ProfilePage = () => {
    const { title } = useParams();

    const [userData, setData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navitage = useNavigate();
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserById(getIdFromURL(title));
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
            }
        }
        fetchData();
    }, [title]);


    useEffect(() => {
        if (userData && !error) {
            const newUrl = `/profile/${toKebabCase(userData.data.username)}.${userData.data.id}`
            if (window.location.pathname !== newUrl) {
                navitage(newUrl, { replace: true });
            }
        }
    }, [userData, error, navitage]);


    if (loading) {
        return <div>Loading...</div>;
    }

    // error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='profile-page'>
            <div className="profile-container">
                <span>Profile</span>
                <div className='profile-top'>
                    <div className="profile-header">
                        <img
                            src={user.avatarUrl}
                            alt="Avatar"
                            className="avatar"
                        />
                        <h2 className="profile-name">{userData.data.firstName}</h2>
                        <p className="profile-username">@{userData.data.username}</p>
                    </div>
                    <div className="profile-info">
                        <p className="bio">{user.bio || 'No bio available'}</p>
                        <p className='profile-created-at'>Created: {userData.data.createdAt}</p>
                        <p className='latest-activity'>Latest Activity: {user.LatestActivity}</p>
                        <div className='profile-info-all'>
                            <div>
                                <div>Posts</div>
                                <div>123</div>
                            </div>
                            <div>
                                <div>Comments</div>
                                <div>123</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tabs">
                    <button
                        className={activeTab === 'posts' ? 'tab-button active' : 'tab-button'}
                        onClick={() => {
                            setActiveTab('posts');
                        }}
                    >
                        Posts
                    </button>
                    <button
                        className={activeTab === 'comments' ? 'tab-button active' : 'tab-button'}
                        onClick={() => setActiveTab('comments')}
                    >
                        Comments
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'posts' && (
                        <div className='tab-content-item'>
                            <div className="cards-container">
                                {posts.map(post => (
                                    <div className="card-row" key={post.id}>
                                        <div className="card-item">
                                            <div className="user-info">
                                                <img src={post.imageUrl} alt={post.author} className="profile-img" />
                                                <h6><Link to="/postDetails">{post.title}</Link></h6>
                                            </div>
                                        </div>
                                        <div className="card-item card-date">{post.date}</div>
                                        <div className="card-item card-author">Started by: <Link to="/">{post.author}</Link></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'comments' && (
                        <div className='tab-content-item'>
                            <div className="cards-container">
                                {posts.map(post => (
                                    <div className="card-row" key={post.id}>
                                        <div className="card-item">
                                            <div className="user-info">
                                                <img src={post.imageUrl} alt={post.author} className="profile-img" />
                                                <h6><Link to="/postDetails">{post.title}</Link></h6>
                                            </div>
                                        </div>
                                        <div className="card-item card-date">{post.date}</div>
                                        <div className="card-item card-author">Started by: <Link to="/">{post.author}</Link></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <InformationPanel />

        </div>
    );
};

export default ProfilePage;


const user = {
    name: 'John Doe',
    username: 'johndoe123',
    email: 'johndoe@example.com',
    bio: 'Web developer passionate about building awesome apps!',
    createdAt: '12 Mart 2018',
    LatestActivity: '2 Ocak 2025',
    avatarUrl: 'https://www.w3schools.com/w3images/avatar2.png',
};

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

