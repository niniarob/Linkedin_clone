import './Header.css'
import Logo from './assets/Logo 1 (1).png'
import EllipseProfile from './assets/Ellipse 14.svg'
import Search from "./assets/search.svg"



export default function Header(){
    return(
        <>        
        <div className='impDiv'>
            <header>
                <div className='logoImput'>
                    <img src={Logo} alt='./logo 1 (1).png'/>
                    <input className='searchInputInProfile' type = "search"
                    placeholder = "Search"
                    />
                </div>
                <div className='listsImg'>
                <ul>
                    <li>Home</li>
                    <li>My Network</li>
                    <li>Jobs</li>
                    <li>Messaging</li>
                    <li>Notifications</li>
                </ul>
                <img src={EllipseProfile} alt='./Ellipse 14.svg'/>
                </div>
            </header>
        </div>
        </>

    )
}