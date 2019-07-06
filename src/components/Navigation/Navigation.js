import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import NavigationExpand from "./NavigationExpand";


class Navigation extends Component {
    render() {
        return (
            <div>
                <NavigationExpand />
            </div>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Header() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
}

export default Navigation;
