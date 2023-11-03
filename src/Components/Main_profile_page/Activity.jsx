import "./Activity.css";



export default function Activity(){
    return(
        <>
        {/* <div className='impDiv'> */}
            <div className='mainInfo radius'>
                <h4 className='titleStyles'>Open to work</h4>
                <p className='paragraphStyles'>UI/UX Designer, Copywriter and Sales Manager</p>
                <span className="blueText">
                Show details
                </span>
            </div>
            <div className="connections">
            <span className="blueText">
                Show details
                </span>
            </div>
            <div className='mainInfo radius'>
                <h4 className='titleStyles'>Activity</h4>
                <span className="blueText blueTxt">
                900 followers
                </span>
                <p className='paragraphStyles'>You haven’t posted yet
                Post you share will be displayed here</p>
                <div className="circle">
                <span className="blueText">
                Create a post
                </span>
                </div>
                <div className="showMore">
                <p className="showMoreText">Show more</p>
            </div>
            </div>
        {/* </div> */}
        </>
    )
}