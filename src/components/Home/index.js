import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-n.png';
import ProfilePic from '../../assets/images/ME.png'
import './index.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {

    const [text] = useTypewriter({
        words: [' Software Engineer', ' Python Expert', ' Data Scientist', ' Problem Solver', ' Tech Enthusiast'],
        loop: {},
      });

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                ahim
                <br />
                <span> {text} </span>
                <span style={{color: '#ffd700'}}><Cursor cursorStyle='<' /></span>
                <br />
                </h1>
                <br /><br /><br />
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img src={ProfilePic} alt="Profile" className="me" />
        </div>
    )
}

export default Home