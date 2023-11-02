import "./Education.css";
import Photo1 from "./assets/Photo1.png";
import Photo2 from "./assets/Photo2.png";


export default function Education(){
    return(
        <>
        <div className='mainInfo radius width'>
            <h2 className='sameStyles'>Education</h2>
            <div className="photo-text">
                <img src={Photo1} alt="Photo1.png"/>
                <p className='paragraphStyles'> 
                <span className="spann">Georgian Technical University</span>
                <br></br>
                Bachelor of International 
                Relationship and Law
                Sep 2008- Jun 2019
                </p>
            </div>
            <div className="photo-text">
                <img src={Photo2} alt="Photo2.png"/>
                <p className='paragraphStyles'> 
                <span className="spann">Georgian Technical University</span>
                <br></br>
                Bachelor of International 
                Relationship and Law
                Sep 2008- Jun 2019
                </p>
            </div>
        </div>
        </>
    )
}