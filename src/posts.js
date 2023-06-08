import { Avatar } from '@mui/material';
import './posts.css';
import InputOption from './inputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Post = forwardRef(({name, description, message, photo}, ref) => {
    const user = useSelector(selectUser);
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photo}>{user.email[0].toUpperCase()}</Avatar>
                <div className="post__info">
                <h3>{name} </h3>
                <p>{description} </p>
                </div>
            </div>

            <div className="post__body">
                <p>{message} </p>
            </div>
            
            <div className="post__buttons">
                <InputOption 
                Icon={ThumbUpOffAltIcon} 
                title='Like'/>

                <InputOption 
                Icon={ChatIcon  } 
                title='Comment'/>

                <InputOption 
                Icon={ShareIcon} 
                title='Share'/>

                <InputOption 
                Icon={SendIcon} 
                title='Send'/>
            </div>
        </div>
    );
})

export default Post;
