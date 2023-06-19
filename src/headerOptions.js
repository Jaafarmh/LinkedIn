import './headerOption.css';

import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const HeaderOption = ({myAvatar, Icon, title, onClick}) => {
    const user = useSelector(selectUser);    
    return (
        <div className='headerOption' onClick={onClick}>
            {Icon && <Icon className='headerOption__icon' />}   
            {myAvatar &&
            <Avatar src={user?.photoUrl } className='headerOption__icon'>
            {user?.email[0].toUpperCase()}
            </Avatar>
                }
                  
        
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
}

export default HeaderOption;