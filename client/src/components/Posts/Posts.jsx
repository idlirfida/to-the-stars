import "./Posts.scss";

function Posts({ posts }) {

    // store server-side public folder path
    const publicUrl = import.meta.env.VITE_PUBLIC_URL;

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
        <div className="posts">
            { sortedPosts ? sortedPosts.map((post) => {

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
                user_id === 1 ? (author = '~ LIRI') : (author = '~ PHIN');

                // construct photo post image path
                let photoPath = '';
                post_type === 'photo' && (photoPath = `${publicUrl}/images/${post_file}`);

                // format post date
                const date = new Date(created_at).toLocaleDateString();

                // split post body into paragraphs
                const paragraphs = post_body.split("\n\n");

                return (
                    <div key={id} className="posts__post">

                        {/* POST TITLE */}
                        <div className="posts__title-container">
                            <h3 className="posts__title">{post_title}</h3>
                        </div>

                        {/* POST BODY */}
                        <div className="posts__body-container">

                            <div className="posts__photo-container">

                                {/* if photo post, display the photo */}
                                {post_type === 'photo' && (
                                    <img src={photoPath} className="posts__photo" alt={`a photo by ${author}`} />
                                )}

                            </div>
                            
                            <div className="posts__text-container">

                                {/* display body paragraphs */}
                                {paragraphs.map((paragraph, index) => (
                                    <p className="posts__paragraph" key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* POST META */}
                            <div className="posts__meta-container">
                                <p className="posts__author">{author}</p>
                                <p className="posts__date">{date}</p>
                            </div>

                            {/* post divider */}
                            <div className="posts__divider"></div>
                        </div>
                    </div>
                );
            }) : ''}
        </div>
    );
}

export default Posts;