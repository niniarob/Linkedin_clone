import './Main_Profile_Page.css';
import Header from './Header';
import UserInfo from './UserInfo';
import MainInformation from './MainInformation';
import Experience from "./Eperience";
import Education from "./Education";
import Activity from "./Activity";
import Skills from "./Skills";
import Resources from "./Resources";
import Analytics from "./Analytics";
import PeopleViewed from './PeopleViewed';
import PeopleKnow from './PeopleKnow';

export default function Main_Profile_Page() {
    return(
        <div>
            <Header />
            <UserInfo />
        <div className='impDiv mainInformationPage'>
            <div className='column'>
            <MainInformation />
            <div className='experience-education'>
            <Experience/>
            <Education/>
            </div>
            <Skills/>
            <div className='experience-education'>
            <Resources/>
            <Analytics/>
            </div>
            </div>
            <div className='secondPart'>
            <Activity/>
            <PeopleViewed/>
            <PeopleKnow/>
            </div>
        </div>
        </div>
    )
}