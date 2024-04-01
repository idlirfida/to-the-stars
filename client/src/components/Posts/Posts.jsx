import "./Posts";

function Posts({ posts }) {

    // store server-side public folder path
    const publicUrl = import.meta.env.VITE_PUBLIC_URL;

    return (
        <div className="posts">

            {posts
                ? posts.map((post) => {

                        // destructure post properties
                        const {
                            id,
                            user_id,
                            post_type,
                            post_title,
                            post_body,
                            post_file,
                            created_at
                        } = post;

                        // denote post author
                        let author;
                        user_id === 1 
                            ? author = 'Liri'
                            : author = 'Phin'

                        // format post date
                        const date = new Date(created_at).toLocaleDateString();
                        
                        // split post body into paragraphs
                        const paragraphs = post_body.split("\n\n");

                        return (

                            <div key={id} className="posts__post">
                                
                                {/* POST TITLE */}
                                <p className="posts__title">{post_title}</p>
                                
                                {/* POST META */}
                                <div className="posts__meta">
                                    <p className="posts__date">{date}</p>
                                    <p className="posts__author">{author}</p>
                                    <p className="posts__type">{post_type}</p>
                                </div>

                                {/* POST BODY */}
                                <div className="posts__body">

                                    {/* if photo post, display the photo */}
                                    {post_type === 'photo' && (
                                        <img src={`${publicUrl}/images/${post_file}`} alt={`a photo by ${author}`} />
                                    )}

                                    {/* display body paragraphs */}
                                    {paragraphs.map((paragraph, index) => (
                                        <p className="posts__paragraph" key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                : ""}
        </div>
    );
}

export default Posts;