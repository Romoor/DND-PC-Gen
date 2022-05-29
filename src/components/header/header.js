import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='title'>Player Character Creator</Link>
            <hr className='divider' />
        </div>
    )
}

export default Header