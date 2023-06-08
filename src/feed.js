import './feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './inputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './posts';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp,onSnapshot, orderBy, query } from "firebase/firestore"; 
import { db, } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const colRef = collection (db,'Posts');
    const user = useSelector(selectUser)

    useEffect (()=>{
        const q = query(colRef, orderBy('createdAt','desc'));
        onSnapshot(q,(snapshot) =>{
            setPosts  (
                snapshot.docs.map(doc=>({
                    
                    data:doc.data(),
                    id:doc.id,
                })));
                
            })
        } ,[])
          
    const sendPost = async (e) => {
        e.preventDefault();
          await addDoc(collection(db, "Posts"), {
                name: user.Name,
                description: user.email,
                message : input,
                photo : user.thePhoto || '',
                createdAt: serverTimestamp()
                });
                setInput('');
          
            
        } 
         
    
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
            
                <div className="feed__input">
                    <CreateIcon />            
                    <form>
                        <input
                         value={input}
                         onChange={(e) => setInput(e.target.value)}
                         type="text" 
                         placeholder='Start a post'
                         />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption
                    Icon={ImageIcon} 
                    color="#70B5F9"
                    title='Photo' />

                    <InputOption
                     Icon={SubscriptionsIcon} 
                     color="#e7a33e" 
                     title='Video' />

                    <InputOption 
                    Icon={EventNoteIcon} 
                    color="#c0cbcd" 
                    title='Event' />

                    <InputOption 
                    Icon={CalendarViewDayIcon} 
                    color="#7fc15e" 
                    title='Write article' />
                </div>
            </div>
            <FlipMove>

            {posts.map(({id, data:{name,description,message,photo}}) => (
                <Post
                key={id}
                name={name}
                description={description}
                photo={photo}
                message={message}
                 />
            )  )}
            </FlipMove>
        
        </div>
    );
}

export default Feed;