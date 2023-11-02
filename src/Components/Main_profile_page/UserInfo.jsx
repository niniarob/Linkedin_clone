import './UserInfo.css';
// import BackgroundProfile from "./assets/Background (1).png"
import EllipseUserPhoto from "./assets/Ellipse 15.png";
import Pen from "./assets/pen.svg";
import Camera from "./assets/camera.svg";

export default function UserInfo(){
    return(
        <>
        <div className='impDiv'>
            <div className='userInfoBackground'>
                <div className='userInfo'>
                    <div className='cameraPen'>
                        <img className='pen' src={Pen} alt='./pen.svg'/>
                        <img className='camera'src={Camera} alt='./camera.svg'/>
                    </div>
                    <div className='userPhotoNameProfetion'>
                    <img className='userPohoProfilePage' src={EllipseUserPhoto}  alt='./Ellipse 15.png'/>
                    <h2 className='userInfoName'>Nino Robakidze</h2>
                    <p className='userInfoProfetion'>Bachelor International Relations and Law</p>
                    </div>
                    <div className='contactInfoPart'>
                        <p className='serviceParagraph'>ANZ OILFIELD SERVICES PVT. LTD.</p>
                        <div className='locationContact'>
                            <p className='location'>Tbilisi, Georgia</p>
                            <p className='contact'>Contact info</p>
                        </div>
                        <div className='publicProfile'>
                            <p className='public-language'>Edit public profile & URL</p>
                            <p className='public-language'>Add profile in another language</p>
                        </div>
                        
                    </div>
                    <div className=' linkButtons'>
                        <div className='butto'>
                            <p className='openTo'>
                                Open to
                            </p>
                        </div>
                        <div className='butto'>
                            <p className='openTo'>
                                Add profile section
                            </p>
                        </div>
                            <div className='butto grayBorder'>
                            <p className='openTo more'>
                                More
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}