import React from "react";
import "../styles/PostDetailsPage.css";

const PostDetails = () => {
    return (
        <div className="comment-section">
            <div className="comment-list">
                <div className="comment-item">
                    <div className="user-info-container">
                        <div className="comment-arrow"></div>
                        <div className="user-details-wrapper">
                            <img src="https://picsum.photos/200/100" alt="JaneSmith" className="user-avatar" />
                        </div>
                        <div className="user-display-name">JaneSmith</div>
                        <div className="user-role">ADMIN</div>
                    </div>
                    <div className="comment-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div className="comment-item">
                    <div className="user-info-container">
                        <div className="comment-arrow"></div>
                        <div className="user-details-wrapper">
                            <img src="https://picsum.photos/200/200" alt="JaneSmith" className="user-avatar" />
                        </div>
                        <div className="user-display-name">JaneSmith</div>
                        <div className="user-role">USER</div>
                    </div>
                    <div className="comment-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
                <div className="comment-item">
                    <div className="user-info-container">
                        <div className="comment-arrow"></div>
                        <div className="user-details-wrapper">
                            <img src="https://picsum.photos/200/300" alt="JaneSmith" className="user-avatar" />
                        </div>
                        <div className="user-display-name">JaneSmith</div>
                        <div className="user-role">MODERATOR</div>
                    </div>
                    <div className="comment-content"> Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
                </div>
                <div className="comment-item">
                    <div className="user-info-container">
                        <div className="comment-arrow"></div>
                        <div className="user-details-wrapper">
                            <img src="https://picsum.photos/200/400" alt="JaneSmith" className="user-avatar" />
                        </div>
                    </div>
                    <div className="comment-content comment-form">
                        <textarea placeholder="input comment..." className="comment-input"></textarea>
                        <button className="comment-submit-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default PostDetails;
