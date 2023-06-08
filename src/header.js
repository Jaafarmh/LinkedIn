import HeaderOption from './headerOptions';
import SearchIcon from '@mui/icons-material/Search';
import AddHomeIcon from '@mui/icons-material/AddHome';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import './header.css';
import { logout } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const Header = () => { 
    const dispatch = useDispatch();
    
    const logOutOfApp =()=>{
        dispatch(logout());
        signOut(auth);
        console.log('user logged out')
    }
    
    return (
        <div className='header'>
        
            <div className="header__left">
                <img src='images/LinkedIn.png' alt="" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={AddHomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption 
                 title='me'
                 onClick = {logOutOfApp}
                 myAvatar={true}  />
            
            </div>
            
        </div>
    );
}

export default Header;