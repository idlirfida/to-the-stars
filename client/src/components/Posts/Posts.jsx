import "./Posts";

function Posts({ posts }) {
    return (
        <div className="posts">
            <h1 className="posts-title">Posts Page</h1>
            {posts
                ? posts.map((post) => {
                        const {id, user_id, post_type, post_title, post_body, post_file, created_at } = post;
                        const paragraphs = post_body.split("\n\n");

                        return (
                            <div key={id} className="post">
                                <strong>{post_title}</strong>
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                                <em>
                                    {user_id === 1 ? ('Liri') : ('Phin')}
                                </em>
                            </div>
                        );
                    })
                : ""}
        </div>
    );
}

export default Posts;