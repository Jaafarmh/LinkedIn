import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Feed from './feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Widgets from './widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


 
  useEffect(()=>{
    
        onAuthStateChanged(auth, (userAuth) => {
          if (userAuth) {
            const {uid,email,displayName,photoURL} = userAuth;
            console.log(userAuth)
             dispatch(login({
              uid : uid,
              email: email,
              Name : displayName,
              thePhoto: photoURL,
            }))
            // ...
          } else {
            dispatch(logout)
          }
        });
 
      },[])

  
  return (
    <div className="app">
    <Header />
    {!user ?
     <Login /> :
     (
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
    </div>

     )}
    </div>
  );
}

export default App;
