import './AddFeed.css'
import Avatar from "./assets/Avatar.png";


export default function AddFeed() {
    return(
        <div className="addToFeedPart">
          <div className="feed">
            <h4>Add to your feed</h4>
            <div className="feedLists">
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <p className="recomendation">View all recommendations</p>
        </div>
    )
}