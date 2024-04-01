import "./HomePage.scss";
import SubNavigation from "../../components/SubNavigation/SubNavigation";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function HomePage() {

    // get current path
    const location = useLocation();
    const { pathname } = location;

    // create state variable for posts response object
    const [posts, setPosts] = useState('');

    // import API url from .env
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // declare a path variable
    let apiPath = '';

    // conditionally set the API path based on current route
    (pathname === '/')
        ? apiPath = `${apiUrl}`
        : apiPath = `${apiUrl}/${pathname}`;

    // make API request
    const getPosts = async () => {
        try {
            const response = await axios.get(`${apiPath}`);
            setPosts(response.data);
        } catch (err) {
            console.error('Having some trouble fetching te requested response!', err);
        }
    }

    useEffect(() => {
        getPosts();
    }, [apiPath]);


    return (
        <div className="homepage">
            <SubNavigation />
            <Posts posts={posts} />
        </div>
    );
}

export default HomePage;