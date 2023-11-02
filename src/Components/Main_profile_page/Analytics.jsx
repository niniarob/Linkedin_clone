import Eye from "./assets/eye.svg";
import Users from "./assets/users-alt.svg";
import Bar from "./assets/chart-bar-alt.svg";
import Search from "./assets/search (1).svg";


export default function Analytics(){
    return (
        <>
        <div className='mainInfo radius width gap bottom'>
            <h2 className='sameStyles'>Analytics</h2>
            <div className="eyee">
            <img src={Eye} alt="./eye.svg"/>
            <p className="private">Private to you</p>
            </div>
            <div className="photo-text">
                <img src={Users} alt="users-alt.svg"/>
                <p className='paragraphStyles'> 
                <span className="spann">60 profile viewed</span>
                <br></br>
                Discover who’s viewed your profile
                </p>
            </div>
            <div className="linediv"></div>
            <div className="photo-text">
                <img src={Bar} alt="chart-bar-alt.svg"/>
                <p className='paragraphStyles'> 
                <span className="spann">14 post impressions</span>
                <br></br>
                Check out who’s engaging with your posts
                </p>
            </div>
            <div className="linediv"></div>
            <div className="photo-text">
                <img src={Search} alt="search (1)"/>
                <p className='paragraphStyles'> 
                <span className="spann">20 search appearances</span>
                <br></br>
                See how often you appear in search results
                See how often you appear in 
                </p>
            </div>
            <div className="showMore">
                <p className="showMoreText">Show more</p>
            </div>

        </div>
        </>
    )
}