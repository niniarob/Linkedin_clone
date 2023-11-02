import "./Resources.css";
import Eye from "./assets/eye.svg";
import Stream from "./assets/signal-stream.svg";
import Networking from "./assets/networking 1.png";
import Demographic from "./assets/demographic 1.png";


export default function Resources(){
    return(
        <>
        <div className='mainInfo radius width gap bottom'>
            <h2 className='sameStyles'>Resources</h2>
            <div className="eyee">
            <img src={Eye} alt="./eye.svg"/>
            <p className="private">Private to you</p>
            </div>
            <div className="photo-text">
                <img src={Stream} alt="signal-stream.svg"/>
                <p className='paragraphStyles'> 
                <span className="spann">Creator mode</span>
                <br></br>
                Get discovered, showcase content on your profile, 
                and get access to creator tools
                </p>
            </div>
            <div className="linediv"></div>
            <div className="photo-text">
                <img src={Networking} alt="networking 1.png"/>
                <p className='paragraphStyles'> 
                <span className="spann">My network</span>
                <br></br>
                See and manage your connections and interests
                </p>
            </div>
            <div className="linediv"></div>
            <div className="photo-text">
                <img src={Demographic} alt="demographic 1.png"/>
                <p className='paragraphStyles'> 
                <span className="spann">Personal demographic information</span>
                <br></br>
                Add or manage your information
                </p>
            </div>
            <div className="showMore">
                <p className="showMoreText">Show more</p>
            </div>

        </div>
        </>
    )
}