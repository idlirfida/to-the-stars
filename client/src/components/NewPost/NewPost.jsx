import "./NewPost.scss";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function NewPost() {

    // import currently logged in user
    const { user } = useOutletContext();

    // import API url from .env
    const apiUrl = import.meta.env.VITE_API_URL;

    // state variables for form inputs and submission feedback
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Handler for form submission of text post
    const handleTextPostSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        // set userId based on logged in user
        let userId;
        (user === 'liri' ? userId = 1 : userId = 2);

        // create new post object
        const newPost = {
            user_id: userId,
            post_title: postTitle,
            post_type: "text",
            post_body: postBody,
        };

        try {
            const response = await axios.post(apiUrl, newPost);

            // reset form fields after successful submission
            setPostTitle("");
            setPostBody("");

            // Set submit success flag to trigger UI change
            setSubmitSuccess(true);

            // reset button UI after 1 second
            setTimeout(() => {
                setSubmitting(false);
                setSubmitSuccess(false);
            }, 1000);
        } catch (error) {
            console.error("Error creating text post:", error.message);
            setSubmitting(false);
        }
    };


    return (
        <div className="new">

            {/* New Text Post */}
            <form className="new__form" onSubmit={handleTextPostSubmit}>
                <h3 className="new__form-title">Penny for your thoughts?</h3>
                <div className="new__form-group">
                    <label htmlFor="postTitle" className="new__form-label">Title:</label>
                    <input
                        type="text"
                            className="new__form-input"
                        id="postTitle"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="new__form-group">
                    <label htmlFor="postBody" className="new__form-label">Body:</label>
                    <textarea
                        className="new__form-input new__form-input--textarea"
                        id="postBody"
                        value={postBody}
                        onChange={(e) => setPostBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={submitSuccess ? "new__submit new__submit--success" : "new__submit"} disabled={submitting}>
                    {submitting ? "Submitting..." : (submitSuccess ? "Submitted!" : "Submit")}
                </button>
            </form>

            {/* New Photo Post */}
            <form className="new__form">
                <h3 className="new__form-title">A thousand words..</h3>
            </form>

            {/* New Music Post */}
            {(user === 'liri') 
                ?   <form className="new__form">
                        <h3 className="new__form-title">Ephemeral whispers..</h3>
                    </form>
                : ''}
        </div>
    );
}

export default NewPost;