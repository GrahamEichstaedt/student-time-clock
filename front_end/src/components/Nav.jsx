import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({loggedIn, lightTheme, setLightTheme}) => {



        return (
                <nav className="topnav">
                        <ul className="nav-list">
                                <li className='nav-item'>
                                        <button 
                                                id="theme-btn"
                                                onClick={
                                                () => setLightTheme(!lightTheme)
                                        }>
                                                { lightTheme ? "Light Theme" : "Dark Theme" }
                                        </button>
                                        <button id='login-btn'>
                                                {loggedIn ? "Log Out" : "Log In"}
                                        </button>
                                </li>
                        </ul>
                </nav>
        )
}

export default Nav;