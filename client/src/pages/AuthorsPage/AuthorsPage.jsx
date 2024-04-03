import "./AuthorsPage.scss";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Login from "../../components/Login/Login";
import AuthorsNavigation from "../../components/AuthorsNavigation/AuthorsNavigation.jsx";

function AuthorsPage() {

    // store logged in user in state
    const [user, setUser] = useState(null);

    // set the logged in user
    function onLoginSuccess(username) {
        setUser(username);
    }

    if (user) {
        // if there's a logged in user, show New and Edit functionalities
        return (
            <div className="authors">
                <AuthorsNavigation />
                <h2 className="authors__message">
                    Welcome, {(user === 'liri') ? 'Liri' : 'Phin'}!</h2>
                <Outlet context={{ user }} />
            </div>
        );
    } else {
        // if no user is logged in, show the login component
        return (
            <div className="authors">
                <Login onLoginSuccess={onLoginSuccess} />
            </div>
        );
    }
}

export default AuthorsPage;