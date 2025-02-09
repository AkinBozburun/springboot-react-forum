import React, { useState } from 'react';
import "../styles/CreatePostPage.css";


const CreatePost = () => {
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
    };
    return (
        <div className="main-container">
            <div className="create-post-container">
                <div className="create-post-header">
                    <h1 className="create-post-title">Create Post</h1>
                </div>
                <form className="create-post-form">
                    <div className="create-post-inputs">
                        <input type="text" id="post-title" placeholder="Add Title Here" className="create-post-title-input" />
                        <textarea id="post-content" placeholder="Start writing your post" className="create-post-content-input"></textarea>
                        <button type="submit" className="create-post-submit-button">Submit</button>
                    </div>
                </form>
            </div>
            <div className="select-topic-container">
                <div className="create-post-header">
                    <h1 className="create-post-title">Select Topic</h1>
                </div>
                <form className="create-post-form">                    
                    <ul className="topic-list">
                        {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'].map((topic)=>(
                            <li
                                key={topic}
                                className={`topic-item ${selectedTopic === topic ? 'selected' : ''}`}
                                onClick={() => handleTopicClick(topic)}>{topic}
                            </li>
                        ))}
                    </ul>                    
                </form>                
            </div>
        </div>
    )
};

export default CreatePost;