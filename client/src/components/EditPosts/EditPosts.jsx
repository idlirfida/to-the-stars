import "./EditPosts.scss";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditPosts() {
    // import currently logged in user
    const { user } = useOutletContext();

    // create state variable for posts response object
    const [posts, setPosts] = useState("");

    // store server-side public folder path
    const publicUrl = import.meta.env.VITE_PUBLIC_URL;

    // import API url from .env
    const apiUrl = `${import.meta.env.VITE_API_URL}/${user}`;

    // make API request
    const getPosts = async () => {
        try {
            const response = await axios.get(apiUrl);
            setPosts(response.data);
        } catch (err) {
            console.error("Having some trouble fetching the requested resource!", err);
        }
    };

    useEffect(() => {
        getPosts();
    }, [posts]);

    // create function for sorting incoming posts by date
    const sortByDate = (a, b) => {
        if (a.created_at < b.created_at) {
            return 1;
        }
        if (a.created_at > b.created_at) {
            return -1;
        }
        return 0;
    };

    // sort incoming posts by date
    const sortedPosts = posts ? posts.sort(sortByDate) : [];

    return (
        <div className="edit">
            <h3 className="edit__sub-message">Edit if you must, but remember:</h3>
            <h2 className="edit__message">Don't let the perfect be the enemy of the good.</h2>
            {sortedPosts
                ? sortedPosts.map((post) => {
                        // destructure post properties
                        const { id, post_type, post_title, post_body, post_file } = post;

                        // construct photo post image path
                        let photoPath = "";
                        post_type === "photo" && (photoPath = `${publicUrl}/images/${post_file}`);

                        // split post body into paragraphs
                        const paragraphs = post_body.split("\n\n");

                        return (
                            <div key={id} className="edit__post">
                                {/* post divider */}
                                <div className="edit__divider"></div>

                                {/* POST TITLE */}
                                <div className="edit__title-container">
                                    <h3 className="edit__title">{post_title}</h3>
                                </div>

                                {/* POST BODY */}
                                <div className="edit__body-container">
                                    <div className="edit__photo-container">
                                        {/* if photo post, display the photo */}
                                        {post_type === "photo" && <img src={photoPath} className="edit__photo" alt={`a photo`} />}
                                    </div>

                                    <div className="edit__text-container">
                                        {/* display body paragraphs */}
                                        {paragraphs.map((paragraph, index) => (
                                            <p className="edit__paragraph" key={index}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="edit__button-container">
                                    <button className="edit__button">Edit</button>
                                    <button className="edit__button">Delete</button>
                                </div>
                            </div>
                        );
                    })
                : ""}
        </div>
    );
}

export default EditPosts;
