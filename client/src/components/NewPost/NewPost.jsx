import "./NewPost.scss";
import { useOutletContext } from "react-router-dom";

function NewPost() {

    // import currently logged in user
    const { user } = useOutletContext();

    return (
        <div className="new">

            {/* New Text Post */}
            <form className="new__form">
                <h3 className="new__form-title">Penny for your thoughts?</h3>
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