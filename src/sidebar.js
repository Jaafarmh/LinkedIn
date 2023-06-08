import { Avatar } from '@mui/material';
import './sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { useState } from 'react';

const Sidebar = () => {
    const user = useSelector(selectUser)
    const {Name, email, thePhoto} = user;

    // const [selectedImage, setSelectedImage] = useState(null);

    const recentItem = (topic) => 
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
  
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg?w=360" alt="" />
        
              
            {/* <Avatar src={thePhoto ? thePhoto :(selectedImage && URL.createObjectURL(selectedImage)) } className='sidebar__avatar'>{Name[0].toUpperCase()}</Avatar> */}
               
            <Avatar src={thePhoto } className='sidebar__avatar'>{Name[0].toUpperCase()}</Avatar>
            <h2>{Name}</h2>
            <h4> {email} </h4>
{/* 
            <input
                type="file"
                id="myImage"
                hidden
                onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                }}
                    />
            <label for="myImage">Add a Photo</label> */}
               
            </div>  
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2.345</p>
                    </div>

                    <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>3.223</p>
                    </div>
                </div>
               
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('Reactjs')}
                {recentItem('Programming')}
                {recentItem('Softwareengineering')}
                {recentItem('Design')}
                {recentItem('Developer')}
            </div>
        </div>
    );
}

export default Sidebar;
