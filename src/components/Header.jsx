import { Link, NavLink } from "react-router-dom";
import './header.css';
const Header = () => {
    return (
        <div>
         
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="/contact">contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;