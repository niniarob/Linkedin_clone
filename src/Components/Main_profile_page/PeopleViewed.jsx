import "./PeopleViewed.css"
import UserOne from "./assets/Ellipse 32.svg";



export default function PeopleViewed(){
    return(
        <>
        <div className='mainInfo radius width widthi'>
            <h1 className="viwedTitle">People also viewed</h1>
            <div className="userss">
                <img src={UserOne} alt="Ellipse 32"/>
                <div className="usersNam">
                <h2 className="names">Emily Gomer</h2>
                <p className="prg">Junior Financial Specialist at Diploma</p>
                <div className="followDiv">
                    <p>+ Follow</p>
                </div>
                </div>
            </div>
            <div className="userss">
                <img src={UserOne} alt="Ellipse 32"/>
                <div className="usersNam">
                <h2 className="names">Emily Gomer</h2>
                <p className="prg">Junior Financial Specialist at Diploma</p>
                <div className="followDiv">
                    <p>+ Follow</p>
                </div>
                </div>
            </div>
            <div className="userss">
                <img src={UserOne} alt="Ellipse 32"/>
                <div className="usersNam">
                <h2 className="names">Emily Gomer</h2>
                <p className="prg">Junior Financial Specialist at Diploma</p>
                <div className="followDiv">
                    <p>+ Follow</p>
                </div>
                </div>
            </div>
            {/* <div className="userss">
                <img src={UserOne} alt="Ellipse 32"/>
                <div className="usersNam">
                <h2 className="names">Emily Gomer</h2>
                <p className="prg">Junior Financial Specialist at Diploma</p>
                <div className="followDiv">
                    <p>+ Follow</p>
                </div>
                </div>
            </div> */}
            <div className="showMore lastMore">
                <p className="showMoreText">Show more</p>
            </div>
        </div>
        </>
    )
}