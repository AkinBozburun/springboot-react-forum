import "../styles/CreatePostPage.css";

const CreatePost = () => {
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
        </div>
    )
};

export default CreatePost;