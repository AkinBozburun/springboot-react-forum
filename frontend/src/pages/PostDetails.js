import React, { useEffect, useState } from "react";
import "../styles/PostDetailsPage.css";
import InformationPanel from "../components/InformationPanel";
import { getPostById } from "../services/postService";
import { useNavigate, useParams } from "react-router-dom";


// create utils
const getIdFromURL = (str) => {
    const id = str.split('.');
    return id[id.length - 1];
}
const toKebabCase = (str) => {
    return str.toLowerCase().split(" ").join("-");
}
const PostDetails = () => {
    const { title } = useParams();

    const [postData, setData] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navitage = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPostById(getIdFromURL(title));
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
        if (postData && !error) {
            const newUrl = `/postDetails/${toKebabCase(postData.data.title)}.${postData.data.id}`
            if (window.location.pathname !== newUrl) {
                navitage(newUrl, { replace: true });
            }
        }
    }, [postData, error, navitage]);


    if (loading) {
        return <div>Loading...</div>;
    }

    // error message
    if (error) {
        return <div>{error}</div>;
    }
    
    return (
        <div className="post-details">
            <div className="comment-section">
                <div className="comment-list">

                    {/*Post*/}
                    <div className="comment-item">
                        <div className="user-info-container">
                            {/* <div className="comment-arrow"></div> */}
                            <div className="user-details-wrapper">
                                <img src="https://picsum.photos/200/100" alt="JaneSmith" className="user-avatar" />
                            </div>
                            <div className="user-display-name">{[postData.data.author.username]}</div>
                            <div className="user-role">ADMIN</div>
                        </div>
                        <div className="comment-content">
                            <div className="comment-created-at">Created: {postData.data.createdAt}</div>
                            <p>{postData.data.content}</p>
                            <div className="comment-updated-at">Updated: {postData.data.updatedAt}</div>
                        </div>
                    </div>

                    {/*Comments*/}
                    {postData.data.comments.map(comment => (


                        <div className="comment-item" key={comment.id}>
                            <div className="user-info-container">
                                {/* <div className="comment-arrow"></div> */}
                                <div className="user-details-wrapper">
                                    <img src="https://picsum.photos/200/100" alt="JaneSmith" className="user-avatar" />
                                </div>
                                <div className="user-display-name">{comment.author.username}</div>
                                <div className="user-role">ADMIN</div>
                            </div>
                            <div className="comment-content">
                                <div className="comment-created-at">Created: {comment.createdAt}</div>
                                <p>{comment.content}</p>
                                <div className="comment-updated-at">Updated: {comment.updatedAt}</div>
                            </div>
                        </div>

                    ))}


                    {/*Enter Comment*/}
                    <div className="comment-item">
                        <div className="user-info-container">
                            {/* <div className="comment-arrow"></div> */}
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
            <InformationPanel />
        </div>
    )
};
export default PostDetails;
