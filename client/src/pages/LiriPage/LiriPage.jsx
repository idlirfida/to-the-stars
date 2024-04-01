import "./LiriPage.scss";
import SubNavigation from "../../components/SubNavigation/SubNavigation";
import Posts from "../../components/Posts/Posts";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function LiriPage() {

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
    (pathname === '/liri')
        ? apiPath = `${apiUrl}/liri`
        : apiPath = `${apiUrl}${pathname}`;

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
        <div>
            <SubNavigation />
            <Posts posts={posts} />
        </div>
    );
}

export default LiriPage;
