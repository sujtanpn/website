import { useRef} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import '../website/navbar.css'
import img1 from '../images/bodyimg.jpg'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };
  return (
    <header>
        <h3>logo</h3>
        <nav ref={navRef}>
            <a href='/#'>Home</a>
            <a href='/#'>About</a>
            <a href='/#'>Contact</a>
            <a href='/#'>Services</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
    
  )
}

export default Navbar
