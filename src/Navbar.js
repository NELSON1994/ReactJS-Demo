import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="=links">
                {/* <a href="/" style={{color: "green", backgroundColor: "blue", borderRadius: '8px'}}>HOME</a> */}
                {/* <a href="/">HOME</a>
                <a href="/">ABOUT US</a>
                <a href="/">CONTACT US</a>
                <a href="/">SUPPORT</a> */}
                  <Link to="/">HOME</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/create">CREATE</Link>
            </div>
        </nav>
    );
}

export default Navbar;