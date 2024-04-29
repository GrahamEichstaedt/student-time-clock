import Nav from './Nav';
import ywcaHeader from '../assets/ywca_header.jpg';
import './Header.css'

const Header = ( { children } ) => {


        return (
                <header className="header">
                        <img src={ywcaHeader} alt="YWCA logo" id="ywca" />
                        <h1>YW TechLab - IT Track</h1>
                        { children }
                </header>
        )
}

export default Header;